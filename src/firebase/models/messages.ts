// Fonctions spécifiques pour le chat
import { queryDocuments, createDocument } from '../database';

export const getMessagesByChannel = async (
  channelSlug: string
): Promise<
  Array<{ who: string; message: string; channel: string; timestamp: number }>
> => {
  const allMessages = (await queryDocuments(
    'messages',
    'channel',
    channelSlug
  )) as Array<{
    who: string;
    message: string;
    channel: string;
    timestamp: number;
  }>;

  return allMessages
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 100)
    .reverse(); // Pour avoir les plus anciens en haut
};

export const sendMessageToChannel = async (
  who: string,
  message: string,
  channel: string
): Promise<string> => {
  return createDocument('messages', {
    who,
    message,
    channel,
    timestamp: Date.now(),
  });
};
