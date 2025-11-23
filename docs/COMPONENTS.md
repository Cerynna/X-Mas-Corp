# Guide d'utilisation des composants

## WowButton

Bouton stylisé inspiré de World of Warcraft avec effets d'animation.

### Props

- `variant`: `'primary' | 'alliance' | 'horde' | 'secondary'` - Style du bouton
- `size`: `'small' | 'medium' | 'large'` - Taille du bouton
- `fullWidth`: `boolean` - Prend toute la largeur disponible

### Exemples

```tsx
import { WowButton } from './components';

// Bouton primaire (or)
<WowButton variant="primary">Participer</WowButton>

// Bouton Alliance
<WowButton variant="alliance" size="large">Pour l'Alliance</WowButton>

// Bouton Horde
<WowButton variant="horde" size="large">Pour la Horde</WowButton>

// Bouton pleine largeur
<WowButton fullWidth>S'inscrire</WowButton>
```

## Card

Carte avec bordures et effets de lumière.

### Composants

- `Card` - Conteneur principal
- `CardHeader` - En-tête avec bordure
- `CardTitle` - Titre de la carte
- `CardSubtitle` - Sous-titre
- `CardContent` - Contenu
- `CardFooter` - Pied de page

### Props de Card

- `variant`: `'default' | 'frost' | 'fire' | 'arcane'` - Thème de la carte
- `bordered`: `boolean` - Affiche une bordure dorée
- `glowing`: `boolean` - Ajoute un effet lumineux au survol

### Exemples

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardSubtitle, 
  CardContent, 
  CardFooter 
} from './components';
import { WowButton } from './components';

// Carte de base
<Card bordered>
  <CardHeader>
    <CardTitle>Quête Légendaire</CardTitle>
    <CardSubtitle>Niveau 60 - Épique</CardSubtitle>
  </CardHeader>
  <CardContent>
    <p>Affrontez le Roi-liche dans sa forteresse...</p>
  </CardContent>
  <CardFooter>
    <WowButton variant="primary">Accepter</WowButton>
  </CardFooter>
</Card>

// Carte avec effet de givre
<Card variant="frost" bordered glowing>
  <CardTitle>Événement d'Hiver</CardTitle>
  <CardContent>
    <p>Participez aux festivités glaciales...</p>
  </CardContent>
</Card>

// Carte arcane
<Card variant="arcane" glowing>
  <CardContent>
    <p>Maîtrisez les arcanes mystiques...</p>
  </CardContent>
</Card>
```

## Utilitaires de mise en page

### Container

Conteneur centré avec largeur maximale.

```tsx
import { Container } from './styles';

<Container>
  {/* Votre contenu */}
</Container>
```

### Grid

Grille responsive.

```tsx
import { Grid } from './styles';

<Grid columns={3} gap="2rem">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</Grid>
```

### Flex

Conteneur flexbox.

```tsx
import { Flex } from './styles';

<Flex direction="row" justify="space-between" align="center">
  <h2>Titre</h2>
  <WowButton>Action</WowButton>
</Flex>
```

## Thème

Accédez au thème dans vos composants personnalisés :

```tsx
import styled from 'styled-components';

const CustomComponent = styled.div`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.glow.blue};
`;
```

## Couleurs du thème

### Primaires
- `theme.colors.primary.gold` - Or
- `theme.colors.primary.darkGold` - Or foncé
- `theme.colors.primary.bronze` - Bronze

### Hiver
- `theme.colors.winter.iceBlue` - Bleu glacial
- `theme.colors.winter.deepBlue` - Bleu profond
- `theme.colors.winter.snowWhite` - Blanc neige
- `theme.colors.winter.frostBlue` - Bleu givré

### Factions
- `theme.colors.alliance.blue` - Bleu Alliance
- `theme.colors.horde.red` - Rouge Horde

### Accents magiques
- `theme.colors.accent.arcane` - Violet arcane
- `theme.colors.accent.frost` - Bleu givre
- `theme.colors.accent.fire` - Rouge feu
- `theme.colors.accent.nature` - Vert nature
- `theme.colors.accent.holy` - Jaune sacré
