// import { useState, useEffect, useCallback } from 'react';
// import { WowButton } from '..';
// import { generateMonster } from '../../types/monsters';
// import type { ClassAbility } from '../../types/abilities';
// import { getAvailableAbilities, calculateManaCost, getAbilityIconUrl } from '../../types/abilities';
// import { BASE_ACTION_ICONS } from '../../data/spellIcons';
// import { POTIONS } from '../../types/shop';
// import { MonsterIconWithLevel } from '../icons';
// import type { EquipmentItem } from '../../types/equipment';
// import {
//   type BattleState,
//   initBattle,
//   playerAttack,
//   playerDefend,
//   playerFlee,
//   useAbility as applyAbility,
//   usePotion as applyPotion,
//   processMonsterTurn,
//   calculateRewards,
// } from '../../types/battle';
// import { expForLevel, formatNumber, playerStatsCalculator } from '../../utils/player';
// import Money from '../Money';
// import { BattleXpBar } from './BattleXpBar';
// import { ActionPanel, ActionTitle, BattleArena, BattleContainer, BattleField, BattleLog, BattleLogTitle, Combatant, CombatantIcon, CombatantName, EmojiIcon, FloatingTextContainer, FloatingTextItem, HealthBar, HealthFill, HealthText, IconButton, LogEntry, ManaBar, ManaFill, ManaText, MonsterIconContainer, RewardItem, RewardMoney, RewardsList, SpellIcon, VictoryPanel, VictoryTitle, } from './Battle.style';
// import type { ZoneType } from '../../types/zone';
// import { useAbilityTooltip } from '../../hooks/useAbilityTooltip';
// import type { Character, WowClass } from '../../types/character';
// import { useCharacter } from '../../contexts';




// interface FloatingText {
//   id: number;
//   text: string;

//   type: 'damage' | 'heal' | 'critical' | 'miss' | 'effect';
//   target: 'player' | 'monster';
// }


// const { character } = useCharacter();
// const [battleState, setBattleState] = useState<BattleState>(() => {
//   const monster = generateMonster(monsterLevel, zone);
//   return initBattle(character!, monster);
// });
// const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
// const [isActionPending, setIsActionPending] = useState(false);
// const { showAbilityTooltip, hideTooltip } = useAbilityTooltip();

// // Fonction pour ajouter un texte flottant
// const addFloatingText = useCallback((text: string, type: FloatingText['type'], target: 'player' | 'monster') => {
//   const newId = Date.now();
//   const newText: FloatingText = {
//     id: newId,
//     text,
//     type,
//     target,
//   };
//   setFloatingTexts(prevTexts => [...prevTexts, newText]);

//   // Retirer le texte après l'animation
//   setTimeout(() => {
//     setFloatingTexts(prevTexts => prevTexts.filter(t => t.id !== newId));
//   }, 1500);
// }, []);

// // Obtenir les capacités disponibles pour le personnage
// const availableAbilities = getAvailableAbilities(character!.class as WowClass, character!.level);

// // Observer les changements de vie pour afficher les dégâts/soins
// useEffect(() => {
//   if (!battleState.battleLog || battleState.battleLog.length === 0) return;

//   const lastLog = battleState.battleLog[battleState.battleLog.length - 1];
//   if (!lastLog) return;

//   // Parser le dernier message du log pour extraire les dégâts/soins
//   const damageMatch = lastLog.message.match(/(\d+) dégâts/i);
//   const healMatch = lastLog.message.match(/(?:récupère|soigne|restaure) (\d+)/i);
//   const criticalMatch = lastLog.message.match(/critique/i);
//   const missMatch = lastLog.message.match(/esquive|raté|manque/i);
//   const defendMatch = lastLog.message.match(/défense|défend/i);

//   // Déterminer qui REÇOIT les dégâts
//   // Le joueur attaque si :
//   // - "Vous attaquez" / "Vous infligez"
//   // - Nom de capacité suivi de "inflige" ou "CRITIQUE"
//   // - Message contient "(-X mana)" (coût de capacité)
//   const isPlayerAttacking =
//     lastLog.message.match(/Vous (attaquez|infligez|utilisez)/i) ||
//     lastLog.message.match(/inflige \d+ dégâts ! \(-\d+ mana\)/i) ||
//     lastLog.message.match(/CRITIQUE.*\(-\d+ mana\)/i);

//   if (missMatch) {
//     const target = isPlayerAttacking ? 'monster' : 'player';
//     addFloatingText('Esquivé !', 'miss', target);
//   } else if (defendMatch && !damageMatch) {
//     addFloatingText('Défense +', 'effect', 'player');
//   } else if (healMatch) {
//     const amount = healMatch[1];
//     addFloatingText(`+${amount}`, 'heal', 'player');
//   } else if (damageMatch) {
//     const amount = damageMatch[1];
//     // Le texte apparaît sur celui qui REÇOIT les dégâts
//     // Si le joueur attaque → dégâts sur le monstre
//     // Si le monstre attaque → dégâts sur le joueur
//     const target = isPlayerAttacking ? 'monster' : 'player';
//     const type = criticalMatch ? 'critical' : 'damage';
//     const text = criticalMatch ? `${amount} !!!` : amount;
//     addFloatingText(text, type, target);
//   }
// }, [battleState.battleLog, addFloatingText]);

// // Traiter le tour du monstre automatiquement
// useEffect(() => {
//   if (battleState.turn === 'monster' && battleState.status === 'ongoing') {
//     const timer = setTimeout(() => {
//       setBattleState((prev) => {
//         setIsActionPending(false); // Libère le verrou APRÈS le tour du monstre
//         return processMonsterTurn(prev);
//       });
//     }, 500); // Délai pour voir l'action du joueur (augmente à 500ms)
//     return () => clearTimeout(timer);
//   }
// }, [battleState.turn, battleState.status]);



// const handleAttack = useCallback(() => {
//   handleAction(() => playerAttack(battleState));
// }, [battleState, handleAction]);

// const handleUseAbility = useCallback(
//   (ability: ClassAbility) => handleAction(() => applyAbility(battleState, ability)),
//   [battleState, handleAction]
// );
// const handleDefend = () => handleAction(() => playerDefend(battleState));
// const handleFlee = () => handleAction(() => playerFlee(battleState));
// const handleUsePotion = (potionId: string) => handleAction(() => applyPotion(battleState, potionId));

// const handleContinue = () => {
//   if (battleState.status === 'victory' && battleState.rewards) {
//     // if (character!.level - 3 > battleState.monster.level) {
//     //   battleState.rewards.experience = 0;
//     // }

// const newExperience = (character!.experience || 0) + battleState.rewards.experience;
// const updatedCharacter: Character = {
//   ...character!,
//   experience: battleState.rewards.levelUp ? (newExperience - expForLevel(character!.level)) : newExperience,
//   gold: (character!.gold || 0) + battleState.rewards.gold,
//   level: battleState.rewards.levelUp ? character!.level + 1 : character!.level,
//   // Conserver la vie/mana actuelle du combat (pas de regen entre combats)
//   health: battleState.rewards.levelUp ? battleState.player.maxHealth : battleState.player.health,
//   mana: battleState.rewards.levelUp ? battleState.player.maxMana : battleState.player.mana,
//   // Mettre à jour l'inventaire avec les potions utilisées
//   inventory: battleState.player.inventory,
//   defeatedMonsters: character!.defeatedMonsters + 1,
//   experienceToNextLevel: expForLevel(battleState.rewards.newLevel),
// };

//     if (battleState.rewards.levelUp) {
//       const statsCharacter = playerStatsCalculator(updatedCharacter);
//       updatedCharacter.health = statsCharacter.maxHealth;
//       updatedCharacter.mana = statsCharacter.maxMana;
//     }

//     // Passer le loot au parent s'il y en a un
//     onBattleEnd(updatedCharacter, battleState.rewards.loot);
//   } else {
//     onExit();
//   }
// };

// // Calculer les récompenses si victoire
// useEffect(() => {
//   if (battleState.status === 'victory' && !battleState.rewards) {
//     const rewards = calculateRewards(battleState.monster, battleState.player);
//     setBattleState((prev) => ({ ...prev, rewards }));
//   }
// }, [battleState.status, battleState.monster, battleState.player, battleState.rewards]);

// const playerHealthPercentage = (battleState.player.health / battleState.player.maxHealth) * 100;
// const playerManaPercentage = (battleState.player.mana / battleState.player.maxMana) * 100;
// const monsterHealthPercentage = (battleState.monster.health / battleState.monster.maxHealth) * 100;



// Gestion des raccourcis clavier 


// useEffect(() => {
//   const touchKeys = [
//     "é",
//     '"',
//     "'",
//     "(",
//     "-",
//     "è",
//   ];

//   const handleKeyUp = (e: KeyboardEvent) => {
//     if (e.key === "&") {
//       handleAttack();
//     }
//     availableAbilities.forEach((ability, index) => {
//       if (e.key === touchKeys[index]) {
//         handleUseAbility(ability);
//       }
//     })
//   };
//   window.addEventListener('keydown', handleKeyUp);

//   return () => {
//     window.removeEventListener('keydown', handleKeyUp);
//   };
// }, [handleAttack, handleUseAbility, availableAbilities]);

// Affichage de la victoire
// if (battleState.status === 'victory' && battleState.rewards) {
//   return (
//     <BattleContainer>
//       <BattleArena>
//         <VictoryPanel>
//           <RewardsList>
//             <VictoryTitle>🎉 Victoire ! 🎉</VictoryTitle>
//             <RewardItem>
//               <BattleXpBar character={character!} battleState={battleState} />
//             </RewardItem>
//             {/* <RewardColones> */}

//             <RewardMoney>
//               Tu as récupéré : <Money amount={battleState.rewards.gold} variant='normal' />
//             </RewardMoney>
//             {battleState.rewards.loot && (
//               <RewardItem>
//                 Tu as ramassé : {' '}
//                 <span style={{
//                   color: `${battleState.rewards.loot.quality === 'poor' ? '#9d9d9d' :
//                     battleState.rewards.loot.quality === 'common' ? '#ffffff' :
//                       battleState.rewards.loot.quality === 'uncommon' ? '#1eff00' :
//                         battleState.rewards.loot.quality === 'rare' ? '#0070dd' :
//                           battleState.rewards.loot.quality === 'epic' ? '#a335ee' : '#ff8000'}`,
//                   fontWeight: 'bold',
//                   fontSize: '1.1rem',
//                 }}>
//                   {battleState.rewards.loot.icon} {battleState.rewards.loot.name}
//                 </span>
//               </RewardItem>
//             )}
//             {/* </RewardColones> */}
//             {battleState.rewards.levelUp && (
//               <RewardItem>
//                 🎊 NIVEAU SUPÉRIEUR ! Niveau {battleState.rewards.newLevel} 🎊
//               </RewardItem>
//             )}

//           </RewardsList>
//           <WowButton onClick={handleContinue}>Continuer</WowButton>
//         </VictoryPanel>
//       </BattleArena>
//     </BattleContainer>
//   );
// }

// Affichage de la défaite ou fuite
// if (battleState.status === 'defeat' || battleState.status === 'fled') {
//   return (
//     <BattleContainer>
//       <BattleArena>
//         <VictoryPanel style={{ background: 'rgba(239, 68, 68, 0.2)', borderColor: '#ef4444' }}>
//           <VictoryTitle style={{ color: '#ef4444' }}>
//             {battleState.status === 'defeat' ? '💀 Défaite' : '🏃 Vous avez fui'}
//           </VictoryTitle>
//           <RewardsList>
//             <RewardItem style={{ color: '#ef4444' }}>
//               {battleState.status === 'defeat'
//                 ? 'Vous avez été vaincu...'
//                 : 'Vous avez échappé au combat'}
//             </RewardItem>
//           </RewardsList>
//           <BattleLog>
//             <BattleLogTitle>📜 Journal de Combat</BattleLogTitle>
//             {[...battleState.battleLog].reverse().map((entry) => (
//               <LogEntry key={entry.id} $type={entry.type}>
//                 {entry.message}
//               </LogEntry>
//             ))}
//           </BattleLog>
//           <WowButton onClick={handleContinue}>Retour</WowButton>
//         </VictoryPanel>
//       </BattleArena>
//     </BattleContainer>
//   );
// }



// return (
//   <BattleContainer>
//     <BattleArena>
//       <BattleField>
//         {/* Joueur */}
//         <Combatant $isPlayer>
//           <CombatantName>{battleState.player.name}</CombatantName>
//           <CombatantIcon>⚔️</CombatantIcon>

//           <HealthBar>
//             <HealthFill $percentage={playerHealthPercentage} />
//             <HealthText>
//               {Math.floor(battleState.player.health / 10)} / {Math.floor(battleState.player.maxHealth / 10)}
//             </HealthText>
//           </HealthBar>

//           <ManaBar>
//             <ManaFill $percentage={playerManaPercentage} />
//             <ManaText>
//               {battleState.player.mana} / {battleState.player.maxMana}
//             </ManaText>
//           </ManaBar>

//           {/* Textes flottants pour le joueur */}
//           <FloatingTextContainer>
//             {floatingTexts
//               .filter(ft => ft.target === 'player')
//               .map(ft => (
//                 <FloatingTextItem key={ft.id} $type={ft.type}>
//                   {formatNumber(Math.floor(parseInt(ft.text) / 10))}
//                 </FloatingTextItem>
//               ))}
//           </FloatingTextContainer>
//         </Combatant>

//         {/* Monstre */}
//         <Combatant>
//           <CombatantName>{battleState.monster.name.replace(/\s*\(Niv\.\s*\d+\)/, '')}</CombatantName>
//           <MonsterIconContainer>
// <MonsterIconWithLevel
//   monster={battleState.monster}
//   level={battleState.monster.level}
//   size={80}
// />
//           </MonsterIconContainer>

//           <HealthBar>
//             <HealthFill $percentage={monsterHealthPercentage} />
//             <HealthText>
//               {battleState.monster.health} / {battleState.monster.maxHealth}
//             </HealthText>
//           </HealthBar>

//           {/* Textes flottants pour le monstre */}
//           <FloatingTextContainer>
//             {floatingTexts
//               .filter(ft => ft.target === 'monster')
//               .map(ft => (
//                 <FloatingTextItem key={ft.id} $type={ft.type}>
//                   {formatNumber(parseInt(ft.text))}
//                 </FloatingTextItem>
//               ))}
//           </FloatingTextContainer>
//         </Combatant>
//       </BattleField>

//       {/* Actions et Potions sur la même ligne */}
//       <ActionPanel>
//         <ActionTitle>Actions & Potions</ActionTitle>
//         <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
//           {/* Actions à gauche */}
//           <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
// <IconButton
//   onClick={handleAttack}
//   onMouseMove={(event) => showAbilityTooltip({
//     id: 'basic-attack',
//     name: 'Attaque',
//     icon: '⚔️',
//     description: 'Une attaque de base contre l\'ennemi.',
//     baseManaCost: 0,
//     unlockLevel: 1,
//   }, event)}
//   onMouseLeave={hideTooltip}
//   disabled={battleState.turn !== 'player' || isActionPending}
//   $disabled={battleState.turn !== 'player' || isActionPending}
//   $variant="primary"
//   style={{ boxShadow: 'none' }}
// >
//   <SpellIcon src={BASE_ACTION_ICONS.attack} alt="Attaquer" />
// </IconButton>
//             {availableAbilities.map((ability) => {
//               const manaCost = calculateManaCost(ability, character!.level);
//               const canUse = battleState.turn === 'player' && battleState.player.mana >= manaCost && !isActionPending;
//               const iconUrl = getAbilityIconUrl(ability);
//               return (
//                 <IconButton
//                   key={ability.id}
//                   onClick={() => handleUseAbility(ability)}
//                   // onMouseEnter={(event) => showAbilityTooltip(ability, event)}
// onMouseLeave={hideTooltip}
// onMouseMove={(event) => showAbilityTooltip(ability, event)}
// disabled={!canUse}
// $disabled={!canUse}
//                   $variant="primary"
//                   style={{ boxShadow: 'none' }}
//                 >
//                   {iconUrl ? (
//                     <SpellIcon src={iconUrl} alt={ability.name} />
//                   ) : (
//                     <EmojiIcon>{ability.icon}</EmojiIcon>
//                   )}
//                 </IconButton>
//               );
//             })}
// <IconButton
//   onClick={handleDefend}
//   onMouseMove={(event) => showAbilityTooltip({
//     id: 'basic-defend',
//     name: 'Défense',
//     icon: '🛡️',
//     description: 'Une action de défense pour réduire les dégâts reçus de 50%.',
//     baseManaCost: 0,
//     unlockLevel: 1,
//   }, event)}
//   onMouseLeave={hideTooltip}
//   disabled={battleState.turn !== 'player' || isActionPending}
//   $disabled={battleState.turn !== 'player' || isActionPending}
//   $variant="secondary"
//   style={{ boxShadow: 'none' }}
// >
//   <SpellIcon src={BASE_ACTION_ICONS.defend} alt="Défendre" />
// </IconButton>
// <IconButton
//   onClick={handleFlee}
//   onMouseMove={(event) => showAbilityTooltip({
//     id: 'basic-flee',
//     name: 'Fuir',
//     icon: '🏃‍♂️',
//     description: 'Fuyez pauvre fou ! Tentez votre chance pour échapper au combat.',
//     baseManaCost: 0,
//     unlockLevel: 1,
//   }, event)}
//   onMouseLeave={hideTooltip}
//   disabled={battleState.turn !== 'player' || isActionPending}
//   $disabled={battleState.turn !== 'player' || isActionPending}
//   $variant="danger"
//   style={{ boxShadow: 'none' }}
// >
//   <SpellIcon src={BASE_ACTION_ICONS.flee} alt="Fuir" />
// </IconButton>
//           </div>
//           {/* Potions à droite */}
//           <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
//             {battleState.player.inventory && battleState.player.inventory.potions.length > 0 && (
//               battleState.player.inventory.potions.map((item: { potionId: string; quantity: number }) => {
//                 const potion = POTIONS.filter(p => p.type !== "effect").find(p => p.id === item.potionId);
//                 if (!potion || item.quantity <= 0) return null;
//                 const canUse = battleState.turn === 'player' && !isActionPending;
//                 return (
//                   <IconButton
//                     key={item.potionId}
//                     onClick={() => handleUsePotion(item.potionId)}
//                     onMouseMove={(event) => showAbilityTooltip({
//                       id: potion.id,
//                       name: potion.name,
//                       description: potion.description,
//                       icon: potion.icon,
//                       baseManaCost: 0,
//                       unlockLevel: 0,
//                     }, event)}
//                     onMouseLeave={hideTooltip}
//                     disabled={!canUse}
//                     $disabled={!canUse}
//                     $variant={potion.type === 'health' ? 'danger' : 'secondary'}
//                     style={{ boxShadow: 'none' }}
//                   >
//                     <EmojiIcon>{potion.icon}</EmojiIcon>
//                   </IconButton>
//                 );
//               })
//             )}
//           </div>
//         </div>
//       </ActionPanel>

//       {/* Journal de combat */}
// <BattleLog>
//   <BattleLogTitle>📜 Journal de Combat</BattleLogTitle>
//   {[...battleState.battleLog].reverse().map((entry) => (
//     <LogEntry key={entry.id} $type={entry.type}>
//       {entry.message}
//     </LogEntry>
//   ))}
// </BattleLog>
//     </BattleArena>
//   </BattleContainer>
// );


import styled from "styled-components"
import { Card, Flex } from "../../styles";
import { BattleLogTitle, EmojiIcon, HealthBar, HealthFill, HealthText, LogEntry, SpellIcon } from "./Battle.style";
import { useBattle } from "../../contexts/useBattle";
import { RaceIcon } from "../icons/RaceIcon";
import { MonsterIcon } from "../icons";
import { calculateManaCost, getAbilityIconUrl, getAvailableAbilities } from "../../types/abilities";
import { useCharacter } from "../../contexts";
import { BASE_ACTION_ICONS } from "../../data/spellIcons";
import { CLASSES } from "../../types/character";
import { useCallback, useEffect, useState } from "react";
import { useAbilityTooltip } from "../../hooks/useAbilityTooltip";
import { calculateRewards, playerAbility, playerAttack, playerDefend, playerFlee, processMonsterTurn, type BattleState } from "../../types/battle";
import { useModal } from "../../contexts/useModal";
import { ModalVictory } from "./ModalVictory";
import { ModalDefeat } from "./ModalDefeat";


const PlayerFrame = styled(Flex)`
  width: 100%;
`;
const MonsterFrame = styled(Flex)`
  width: 100%;
`;
const VS = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  align-self: center;
  position: relative;

    &::before {
    content: '⚔️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    opacity: 0.2;
    z-index: 0;
    animation: pulse 4s ease-in-out infinite;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
    50% { opacity: 0.2; transform: translate(-50%, -50%) scale(1.1); }
  }
`;

const Avatar = styled.div`
  min-width: 100px;
  min-height: 100px;
  background-color: ${({ theme }) => theme.colors.winter.deepBlue};
  border-radius: 50%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  backdrop-filter: blur(10px);
  align-items: center;
  position: relative;
`;
const Level = styled.div<{ $reverse?: boolean }>`
  position: absolute;
  bottom: 0px;
  ${({ $reverse }) => $reverse ? 'left: -5px;' : 'right: -5px;'}
  background: ${({ theme }) => theme.colors.primary.gold};
  color: ${({ theme }) => theme.colors.neutral.black};
  padding: 2px 6px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const Name = styled.div`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding-right: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.md};
`;

const ActionPanel = styled(Card)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxs};
  justify-content: center;
`;

const ActionSpell = styled.div<{ $disabled?: boolean }>`
  width: 60px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.winter.deepBlue};
  border: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  backdrop-filter: blur(10px);
  overflow: hidden;
  filter: ${({ $disabled }) => ($disabled ? 'grayscale(100%)' : 'none')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    box-shadow: ${({ theme, $disabled }) => ($disabled ? theme.shadows.xl : theme.shadows.glow.gold)};
    transition: all 0.2s;
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  }
`;

const BindingTouch = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  bottom: -2px;
  right: -2px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 1px 4px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BattleLog = styled(Card)`
  padding: ${({ theme }) => theme.spacing.md};
  height: 300px;
  overflow-y: auto;
`;



export function BattleComponent() {
  const { battle, setBattle } = useBattle();
  const { character } = useCharacter();
  const [isActionPending, setIsActionPending] = useState(false);
  const { showAbilityTooltip, hideTooltip } = useAbilityTooltip();
  const { openModal } = useModal();

  const classInfo = CLASSES[character!.class];
  const touchKeys = [
    "é",
    '"',
    "'",
    "(",
    "-",
    "è",
  ];

  const handleAction = useCallback((action: () => BattleState) => {
    if (battle == null || !battle) return;
    if (battle.turn === 'player' && battle.status === 'ongoing' && !isActionPending) {
      setIsActionPending(true);
      const newState = action();
      setBattle(newState);
      // Si le tour reste au joueur (ex: pas assez de mana), libérer le verrou
      if (newState.turn === 'player' && newState.status === 'ongoing') {
        setIsActionPending(false);
      }
    }
  }, [battle, isActionPending, setBattle]);


  useEffect(() => {
    if (battle == null || !battle) return;
    if (battle.turn === 'monster' && battle.status === 'ongoing') {
      const timer = setTimeout(() => {
        setIsActionPending(false);
        setBattle(processMonsterTurn(battle));
      }, 500); // Délai pour voir l'action du joueur (augmente à 500ms)
      return () => clearTimeout(timer);
    }
    if (battle.status === 'victory') {
      console.log('Battle won!');
      const rewards = calculateRewards(battle.monster, battle.player);
      openModal(<ModalVictory rewards={rewards} />, "linear-gradient(135deg,rgba(22, 119, 58, 1) 0%,rgba(16, 95, 45, 1) 100%)");
      setIsActionPending(false);
    }
    if (battle.status === 'defeat' || battle.status === 'fled') {
      console.log('Battle lost or fled!');
      openModal(<ModalDefeat />, "linear-gradient(135deg,rgba(119, 22, 22, 1) 0%,rgba(95, 16, 16, 1) 100%)");
      setIsActionPending(false);
    }
  }, [battle, setBattle]);


  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "&") {
        handleAction(() => playerAttack(battle!));
      }
      const availableAbilities = getAvailableAbilities(character!.class, character!.level);
      availableAbilities.forEach((ability, index) => {
        if (e.key === touchKeys[index]) {
          handleAction(() => playerAbility(battle!, ability));
        }
      })
    };
    window.addEventListener('keydown', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyUp);
    };
  }, [handleAction, battle, character]);

  if (!battle) {
    return <div>Loading...</div>;
  }
  const availableAbilities = getAvailableAbilities(character!.class, character!.level);
  return (<>
    <Flex direction="row" gap="2rem" justify="space-between">
      <PlayerFrame direction="row" align="flex-start" gap="0.5rem">
        <Avatar>
          <RaceIcon race={battle.player.race} sex={"male"} size={80} />
          <Level>{battle.player.level}</Level>
        </Avatar>
        <Flex direction="column" gap="0.25rem" align="flex-start">
          <Name>{battle.player.name}</Name>
          <HealthBar>
            <HealthFill $percentage={(battle.player.health / battle.player.maxHealth) * 100} />
            <HealthText>
              {Math.floor(battle.player.health / 10)} / {Math.floor(battle.player.maxHealth / 10)}
            </HealthText>
          </HealthBar>
        </Flex>
      </PlayerFrame>
      <VS>

        VS
      </VS>
      <MonsterFrame direction="row-reverse" align="flex-start" gap="0.5rem">
        <Avatar>
          <MonsterIcon
            monster={battle.monster}
            size={80}
          />
          <Level $reverse>{battle.monster.level}</Level>
        </Avatar>
        <Flex direction="column" gap="0.25rem" align="flex-end">
          <Name>{battle.monster.name}</Name>
          <HealthBar>
            <HealthFill $percentage={(battle.monster.health / battle.monster.maxHealth) * 100} $reverse />
            <HealthText>
              {Math.floor(battle.monster.health / 10)} / {Math.floor(battle.monster.maxHealth / 10)}
            </HealthText>

          </HealthBar>
        </Flex>
      </MonsterFrame>
    </Flex>

    <BattleLog>
      <BattleLogTitle>📜 Journal de Combat</BattleLogTitle>
      {[...battle.battleLog].reverse().map((entry) => (
        <LogEntry key={entry.id} $type={entry.type}>
          {entry.message}
        </LogEntry>
      ))}
    </BattleLog>

    <ActionPanel>
      <ActionSpell
        style={{ marginRight: '1.5rem', }}
        $disabled={battle.turn !== 'player' || isActionPending}
        onClick={() => handleAction(() => playerAttack(battle))}
        onMouseMove={(event) => showAbilityTooltip({
          id: 'basic-attack',
          name: 'Attaque',
          icon: '⚔️',
          description: 'Une attaque de base contre l\'ennemi.',
          baseManaCost: 0,
          unlockLevel: 1,
        }, event)}
        onMouseLeave={hideTooltip}
      >
        <SpellIcon src={classInfo.primaryStat === "intellect" ? BASE_ACTION_ICONS.magic : BASE_ACTION_ICONS.attack} alt="Attaquer" />
        <BindingTouch>&amp;</BindingTouch>
      </ActionSpell>
      {
        availableAbilities.map((ability) => {
          const manaCost = calculateManaCost(ability, character!.level);
          const canUse = battle.turn === 'player' && battle.player.mana >= manaCost && !isActionPending;
          const iconUrl = getAbilityIconUrl(ability);
          return (
            <ActionSpell
              key={ability.id}
              $disabled={!canUse}
              onMouseLeave={hideTooltip}
              onMouseMove={(event) => showAbilityTooltip(ability, event)}
              onClick={() => handleAction(() => playerAbility(battle, ability))}
            >
              {iconUrl ? (
                <SpellIcon src={iconUrl} alt={ability.name} />
              ) : (
                <EmojiIcon>{ability.icon}</EmojiIcon>
              )}
              <BindingTouch>{touchKeys[availableAbilities.indexOf(ability)]}</BindingTouch>
            </ActionSpell>
          )
        })
      }
      {
        Array.from({ length: 5 - availableAbilities.length }).map((_, index) => (
          <ActionSpell key={index} />
        ))
      }

      <ActionSpell
        style={{ marginLeft: '1.5rem', }}
        $disabled={battle.turn !== 'player' || isActionPending}
        onMouseMove={(event) => showAbilityTooltip({
          id: 'basic-defend',
          name: 'Défense',
          icon: '🛡️',
          description: 'Une action de défense pour réduire les dégâts reçus de 50%.',
          baseManaCost: 0,
          unlockLevel: 1,
        }, event)}
        onMouseLeave={hideTooltip}
        onClick={() => handleAction(() => playerDefend(battle))}

      >
        <SpellIcon src={BASE_ACTION_ICONS.defend} alt="Défendre" />
        <BindingTouch>è</BindingTouch>
      </ActionSpell>
      <ActionSpell
        $disabled={battle.turn !== 'player' || isActionPending}
        onMouseMove={(event) => showAbilityTooltip({
          id: 'basic-flee',
          name: 'Fuir',
          icon: '🏃‍♂️',
          description: 'Fuyez pauvre fou ! Tentez votre chance pour échapper au combat.',
          baseManaCost: 0,
          unlockLevel: 1,
        }, event)}
        onMouseLeave={hideTooltip}
        onClick={() => handleAction(() => playerFlee(battle))}
      >
        <SpellIcon src={BASE_ACTION_ICONS.flee} alt="Fuir" />
        <BindingTouch>_</BindingTouch>
      </ActionSpell>
    </ActionPanel >
    {/* <Card>

      <pre>
        {JSON.stringify(battle, null, 2)}
      </pre>


    </Card> */}

  </>)
}
