import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { WowButton } from './';
import { StyledRadioButton } from './StyledRadioButton';
import type {
  Faction,
  WowClass,
  WowRace,
} from '../types/character';
import {
  getRacesByFaction,
  getClassesForRace,
} from '../types/character';
import { calculateBaseStats } from '../utils/player';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(10, 14, 26, 0.95) 0%,
    rgba(15, 28, 50, 0.98) 100%
  );
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 900px;
  width: 100%;
`;

const CreationPanel = styled.div`
  max-width: 900px;
  width: 100%;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.primary.gold};
  text-shadow: ${({ theme }) => theme.shadows.glow.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FormSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.winter.iceBlue};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(0, 0, 0, 0.4);
  border: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.winter.darkIce};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.fonts.body};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.gold};
    box-shadow: 0 0 12px ${({ theme }) => theme.colors.primary.gold}40;
  }
`;

const StatsPreview = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.winter.darkIce};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const StatsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-family: ${({ theme }) => theme.fonts.display};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm};
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const StatName = styled.span`
  color: ${({ theme }) => theme.colors.winter.iceBlue};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const StatValue = styled.span`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

interface CharacterCreationProps {
  onComplete: (characterData: {
    name: string;
    faction: Faction;
    race: WowRace;
    class: WowClass;
  }) => void;
  onCancel?: () => void;
}

export function CharacterCreation({ onComplete, onCancel }: CharacterCreationProps) {

  const [name, setName] = useState('');
  const [faction, setFaction] = useState<Faction | null>(null);
  const [race, setRace] = useState<WowRace | null>(null);
  const [selectedClass, setSelectedClass] = useState<WowClass | null>(null);

  // Races disponibles pour la faction choisie
  const availableRaces = useMemo(() => {
    if (!faction) return [];
    return getRacesByFaction(faction);
  }, [faction]);

  // Classes disponibles pour la race choisie
  const availableClasses = useMemo(() => {
    if (!race || !faction) return [];
    return getClassesForRace(race, faction);
  }, [race, faction]);

  // Stats calculées
  const characterStats = useMemo(() => {
    if (!selectedClass || !race) return null;
    return calculateBaseStats(selectedClass, race);
  }, [selectedClass, race]);

  const handleComplete = () => {
    if (name && faction && race && selectedClass) {
      onComplete({ name, faction, race, class: selectedClass });
    }
  };

  return (
    <Container>
      <CreationPanel>
        <Title>⚔️ Création de Personnage</Title>

        <FormSection>
          <Label>Nom du personnage</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Entrez un nom (min. 3 caractères)"
            maxLength={12}
            autoFocus
          />
        </FormSection>

        <FormSection>
          <Label>Faction</Label>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <StyledRadioButton
              checked={faction === 'alliance'}
              onChange={() => {
                setFaction('alliance');
                setRace(null);
                setSelectedClass(null);
              }}
              label={<span>🛡️ Alliance</span>}
              value="alliance"
              name="faction"
              borderColor="#3b82f6"
              backgroundColor="#1e293b"
            />
            <StyledRadioButton
              checked={faction === 'horde'}
              onChange={() => {
                setFaction('horde');
                setRace(null);
                setSelectedClass(null);
              }}
              label={<span>⚔️ Horde</span>}
              value="horde"
              name="faction"
              borderColor="#ef4444"
              backgroundColor="#450a0a"
            />
          </div>
        </FormSection>

        {faction && (
          <FormSection>
            <Label>Race</Label>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {availableRaces.map((raceInfo) => (
                <StyledRadioButton
                  key={raceInfo.id}
                  checked={race === raceInfo.id}
                  onChange={() => {
                    setRace(raceInfo.id);
                    setSelectedClass(null);
                  }}
                  label={<span>{raceInfo.icon} {raceInfo.name}</span>}
                  value={raceInfo.id}
                  name="race"
                  borderColor={faction === 'alliance' ? '#3b82f6' : '#ef4444'}
                  backgroundColor={faction === 'alliance' ? '#1e293b' : '#450a0a'}
                />
              ))}
            </div>
          </FormSection>
        )}

        {race && faction && (
          <FormSection>
            <Label>Classe</Label>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {availableClasses.map((classInfo) => (
                <StyledRadioButton
                  key={classInfo.id}
                  checked={selectedClass === classInfo.id}
                  onChange={() => setSelectedClass(classInfo.id)}
                  label={<span style={{ color: classInfo.color }}>{classInfo.icon} {classInfo.name}</span>}
                  value={classInfo.id}
                  name="class"
                  borderColor={classInfo.color}
                  backgroundColor="#222"
                  disabled={false}
                />
              ))}
            </div>
          </FormSection>
        )}

        {/* Résumé de la classe sélectionnée */}
        {selectedClass && (
          <FormSection>
            <Label>Résumé de la classe</Label>
            <div style={{ marginBottom: '1rem', color: availableClasses.find(c => c.id === selectedClass)?.color, textAlign: 'center' }}>
              {availableClasses.find(c => c.id === selectedClass)?.description}
            </div>
            {characterStats && (
              <StatsPreview>
                <StatsTitle>📊 Statistiques de départ</StatsTitle>
                <StatsGrid>
                  <StatItem>
                    <StatName>❤️ Points de vie</StatName>
                    <StatValue>{characterStats.health}</StatValue>
                  </StatItem>
                  <StatItem>
                    <StatName>{characterStats.energyName}</StatName>
                    <StatValue>{characterStats.energy}</StatValue>
                  </StatItem>
                  <StatItem>
                    <StatName>💪 Force</StatName>
                    <StatValue>{characterStats.strength}</StatValue>
                  </StatItem>
                  <StatItem>
                    <StatName>🏃 Agilité</StatName>
                    <StatValue>{characterStats.agility}</StatValue>
                  </StatItem>
                  <StatItem>
                    <StatName>🧠 Intelligence</StatName>
                    <StatValue>{characterStats.intellect}</StatValue>
                  </StatItem>
                  <StatItem>
                    <StatName>🛡️ Endurance</StatName>
                    <StatValue>{characterStats.stamina}</StatValue>
                  </StatItem>
                </StatsGrid>
              </StatsPreview>
            )}
          </FormSection>
        )}

        <ButtonGroup>
          {onCancel && (
            <WowButton $variant="secondary" onClick={onCancel}>
              Annuler
            </WowButton>
          )}
          <WowButton onClick={handleComplete} disabled={!(name.trim().length >= 3 && faction && race && selectedClass)}>
            ✓ Créer le personnage
          </WowButton>
        </ButtonGroup>
      </CreationPanel>
    </Container>
  );
}