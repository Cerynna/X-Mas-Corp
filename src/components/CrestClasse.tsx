
import styled from "styled-components";
import CrestDk from "../assets/crests/death-knight.png";
import CrestDruid from "../assets/crests/druid.png";
import CrestHunter from "../assets/crests/hunter.png";
import CrestMage from "../assets/crests/mage.png";
import CrestMonk from "../assets/crests/monk.png";
import CrestPaladin from "../assets/crests/paladin.png";
import CrestPriest from "../assets/crests/priest.png";
import CrestRogue from "../assets/crests/rogue.png";
import CrestShaman from "../assets/crests/shaman.png";
import CrestWarlock from "../assets/crests/warlock.png";
import CrestWarrior from "../assets/crests/warrior.png";
import type { WowClass } from "../types/character";


const classCrests = {
    "death-knight": CrestDk,
    druid: CrestDruid,
    hunter: CrestHunter,
    mage: CrestMage,
    monk: CrestMonk,
    paladin: CrestPaladin,
    priest: CrestPriest,
    rogue: CrestRogue,
    shaman: CrestShaman,
    warlock: CrestWarlock,
    warrior: CrestWarrior,
};

const Crest = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export function CrestClasse({ wowClass }: { wowClass: WowClass }) {
    return <Crest src={classCrests[wowClass]} alt={wowClass} />
} 