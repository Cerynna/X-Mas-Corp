# 🚀 Quick Start - Xmas Corp

## Démarrage en 5 étapes

### 1️⃣ Installer les dépendances
```bash
yarn install
```

### 2️⃣ Configurer Firebase
```bash
# Copier le fichier d'exemple
cp .env.example .env

# Éditer .env avec vos clés Firebase
# Voir FIREBASE.md pour obtenir les clés
```

### 3️⃣ Lancer le serveur
```bash
yarn dev
```

### 4️⃣ Ouvrir dans le navigateur
```
http://localhost:5174/
```

### 5️⃣ Se connecter
- Cliquez sur "Connexion" dans le header
- Créez un compte ou utilisez Google

## 🔥 Firebase Setup (Optionnel pour tester)

Si vous n'avez pas encore Firebase :
1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Créez un nouveau projet
3. Ajoutez une application Web
4. Copiez la config dans `.env`
5. Activez Authentication (Email + Google)
6. Créez une base Firestore

**Voir FIREBASE.md pour le guide détaillé**

## 🎨 Premier composant personnalisé

### Créer un nouveau bouton
```tsx
import { WowButton } from './components';

function MonComposant() {
  return (
    <WowButton variant="alliance" onClick={() => alert('Pour l\'Alliance !')}>
      Rejoindre l'Alliance
    </WowButton>
  );
}
```

### Créer une nouvelle carte
```tsx
import { Card, CardTitle, CardContent } from './components';

function MaCarte() {
  return (
    <Card variant="frost" bordered glowing>
      <CardTitle>Ma Quête Épique</CardTitle>
      <CardContent>
        <p>Description de ma quête...</p>
      </CardContent>
    </Card>
  );
}
```

## 🎯 Structure du projet

```
src/
├── components/        # Composants réutilisables
│   ├── WowButton.tsx  # Boutons stylisés
│   ├── Card.tsx       # Système de cartes
│   └── Events.tsx     # Exemple complet
├── styles/           # Thème et styles
│   ├── theme.ts      # Configuration du thème
│   ├── GlobalStyles.ts
│   └── components.ts
└── App.tsx           # Page principale
```

## 📚 Documentation complète

- **README.md** - Guide complet du projet
- **COMPONENTS.md** - Documentation des composants
- **PROJECT_SUMMARY.md** - Résumé et prochaines étapes

## 🎮 Thème WoW

Le projet utilise un thème complet inspiré de World of Warcraft :

- ✨ Couleurs or, bleu glacial, rouge/bleu des factions
- ❄️ Animations de neige
- 🎨 Effets de lumière (glow)
- ⚔️ Polices épiques (Cinzel, Cinzel Decorative)
- 📱 Design responsive

## 🛠️ Technologies

- **React 19** - UI Framework
- **TypeScript** - Typage statique
- **Vite** - Build tool
- **Styled Components** - Styling
- **Yarn** - Package manager

## ❓ Besoin d'aide ?

Consultez les fichiers de documentation :
- `COMPONENTS.md` pour les composants
- `README.md` pour les détails techniques
- `PROJECT_SUMMARY.md` pour le récapitulatif complet

---

**Pour l'Alliance ! Pour la Horde ! Pour Azeroth !** ⚔️
