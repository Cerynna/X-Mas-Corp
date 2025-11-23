import styled from 'styled-components';
import { Card, CardHeader, CardTitle, CardSubtitle, CardContent } from '../components';

const EventsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const EventIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const EventDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const EventReward = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border-left: ${({ theme }) => theme.borders.thick} solid ${({ theme }) => theme.colors.primary.gold};
  margin-top: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary.gold};
`;

const events = [
  {
    icon: '❄️',
    title: 'Tempête de Givre',
    subtitle: 'Boss Mondial',
    variant: 'frost' as const,
    description: 'Affrontez le redoutable Seigneur de Givre dans les terres glacées du nord. Un combat épique qui nécessitera toute votre bravoure et votre stratégie.',
    reward: '🏆 Monture Légendaire : Wyrm de Givre',
  },
  {
    icon: '🎁',
    title: 'Chasse aux Cadeaux',
    subtitle: 'Événement Quotidien',
    variant: 'default' as const,
    description: 'Parcourez Azeroth à la recherche de cadeaux cachés par le Père Hiver. Chaque jour apporte de nouvelles surprises et récompenses.',
    reward: '💎 Objets Épiques & Monnaie d\'Événement',
  },
  {
    icon: '⚔️',
    title: 'Tournoi Hivernal',
    subtitle: 'PvP Arène',
    variant: 'fire' as const,
    description: 'Démontrez votre valeur dans l\'arène glacée ! Alliance contre Horde dans un combat sans merci pour la gloire et l\'honneur.',
    reward: '👑 Titre : Champion d\'Hiver',
  },
  {
    icon: '🔮',
    title: 'Mystères Arcanes',
    subtitle: 'Quête Narrative',
    variant: 'arcane' as const,
    description: 'Découvrez les secrets ancestraux cachés dans les anciennes ruines. Une aventure mystique remplie de magie et de découvertes.',
    reward: '📚 Grimoire Légendaire',
  },
];

export function Events() {
  return (
    <EventsSection>
      <EventsGrid>
        {events.map((event, index) => (
          <Card key={index} variant={event.variant} bordered glowing>
            <CardHeader>
              <EventIcon>{event.icon}</EventIcon>
              <CardTitle>{event.title}</CardTitle>
              <CardSubtitle>{event.subtitle}</CardSubtitle>
            </CardHeader>
            <CardContent>
              <EventDescription>{event.description}</EventDescription>
              <EventReward>{event.reward}</EventReward>
            </CardContent>
          </Card>
        ))}
      </EventsGrid>
    </EventsSection>
  );
}
