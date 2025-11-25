// Fonctions spécifiques pour les members
import { getDocuments, updateDocument } from "../database";
import { orderBy, groupBy } from "es-toolkit/array";
import { slugify } from "../../utils";
import type { Character } from "../../types/character";

export const getMembers = async (): Promise<Character[]> => {
  const allMembers = (await getDocuments("characters")) as Character[];

  const groupedMembers = groupBy(
    allMembers.map((member) => {
      member.status =
        typeof member.updatedAt === "number" &&
        member.updatedAt + 60 * 1000 * 15 > Date.now()
          ? "online"
          : "offline";
      return member;
    }),
    (member) => member.status || "offline"
  );

  groupedMembers["online"] = orderBy(
    groupedMembers["online"] || [],
    ["name"],
    ["asc"]
  );
  groupedMembers["offline"] = orderBy(
    groupedMembers["offline"] || [],
    ["name"],
    ["asc"]
  );

  const uniqueMembers = [
    ...groupedMembers["online"],
    ...groupedMembers["offline"],
  ].filter(
    (member, index, self) =>
      index === self.findIndex((m) => m.userId === member.userId)
  );
  return uniqueMembers;
};

const NameMPSlug = (who: Character, target: Character) => {
  const names = [who.name.toLowerCase(), target.name.toLowerCase()].sort();
  return slugify(`mp_${names.join("_")}`);
};

export const AddMpList = async (who: Character, target: Character) => {
  const slug = NameMPSlug(who, target);
  if (!who.chatChannel) who.chatChannel = [];
  if (!target.chatChannel) target.chatChannel = [];

  if (!who.chatChannel.find((c) => c.slug === slug)) {
    who.chatChannel.push({
      slug: slug,
      name: target.name,
    });
    await updateDocument("characters", who.id!, {
      chatChannel: who.chatChannel,
    });
  }
  if (!target.chatChannel.find((c) => c.slug === slug)) {
    target.chatChannel.push({
      slug: slug,
      name: who.name,
    });
    await updateDocument("characters", target.id!, {
      chatChannel: target.chatChannel,
    });
  }
};

export const removeMpList = async (character: Character, slug: string) => {
  const updatedChannels = character.chatChannel.filter((c) => c.slug !== slug);
  await updateDocument("characters", character.id!, {
    chatChannel: updatedChannels,
  });
};
