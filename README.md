# ❄️ Fête d'Hiver d'Azeroth - Xmas Corp Event

Une application web inspirée de World of Warcraft pour un événement d'hiver épique !

## 🎮 Technologies

- **React 19** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **Styled Components** - CSS-in-JS avec thème personnalisé
- **Yarn** - Gestionnaire de packages
- **Firebase** - Backend (Auth, Firestore, Storage, Hosting)

## 🎨 Thème

Le thème s'inspire de l'interface utilisateur de World of Warcraft avec :

- **Palette de couleurs hivernale** : Bleu glacial, or, argent
- **Typographie épique** : Polices inspirées de WoW (Cinzel, Cinzel Decorative)
- **Effets visuels** : Ombres lumineuses, animations de particules de neige
- **Composants stylisés** : Boutons Alliance/Horde, cartes avec bordures dorées

### Couleurs principales

- 🟡 **Or** (#FFD700) - Couleur signature WoW
- 🔵 **Bleu glacial** (#4A90E2) - Thème d'hiver
- ⚪ **Blanc neige** (#F8F9FA) - Pureté hivernale
- 🔴 **Rouge Horde** (#8B0000) - Faction Horde
- 🔵 **Bleu Alliance** (#0078D7) - Faction Alliance

## 🚀 Installation

```bash
# Installer les dépendances
yarn install

# Configurer Firebase (voir FIREBASE.md)
cp .env.example .env
# Puis éditez .env avec vos clés Firebase

# Lancer le serveur de développement
yarn dev
```

## 📦 Scripts disponibles

```bash
# Développement
yarn dev          # Lance le serveur de développement (http://localhost:5173)

# Production
yarn build        # Compile le projet pour la production
yarn preview      # Prévisualise le build de production

# Qualité du code
yarn lint         # Vérifie le code avec ESLint
```

## 📁 Structure du projet

```
xmas-corp/
├── src/
│   ├── components/          # Composants React
│   │   ├── Header.tsx       # Header avec auth
│   │   ├── AuthForm.tsx     # Formulaire connexion/inscription
│   │   ├── WowButton.tsx    # Boutons stylisés
│   │   ├── Card.tsx         # Système de cartes
│   │   └── Events.tsx       # Liste d'événements
│   ├── contexts/            # Contextes React
│   │   ├── AuthContext.tsx  # Contexte d'authentification
│   │   └── useAuth.ts       # Hook personnalisé
│   ├── firebase/            # Configuration Firebase
│   │   ├── config.ts        # Configuration
│   │   ├── auth.ts          # Authentification
│   │   ├── firestore.ts     # Base de données
│   │   └── index.ts         # Exports
│   ├── styles/              # Styles et thème
│   │   ├── theme.ts         # Configuration du thème
│   │   ├── GlobalStyles.ts  # Styles globaux
│   │   ├── components.ts    # Composants réutilisables
│   │   ├── styled.d.ts      # Types TypeScript
│   │   └── index.ts         # Exports
│   ├── App.tsx              # Composant principal
│   └── main.tsx             # Point d'entrée
├── public/                  # Assets statiques
├── .env.example             # Exemple variables d'environnement
├── FIREBASE.md              # Documentation Firebase
└── package.json
```

## 🎯 Fonctionnalités

- ✨ Interface inspirée de World of Warcraft
- ❄️ Animation de flocons de neige en arrière-plan
- 🎨 Thème personnalisé avec styled-components
- 📱 Design responsive
- ⚡ Performance optimisée avec Vite
- 🎭 Effets de lumière et animations
- 🔐 Authentification Firebase (Email/Password & Google)
- 📊 Base de données Firestore
- 👤 Gestion des utilisateurs et personnages
- 🏰 Système de guildes Alliance/Horde

## 🛠️ Développement

Le projet utilise :
- **Yarn PnP** (Plug'n'Play) pour une gestion optimisée des dépendances
- **TypeScript strict mode** pour une meilleure qualité du code
- **ESLint** pour le linting
- **Hot Module Replacement (HMR)** pour un développement rapide

## 📝 Personnalisation

Le thème peut être personnalisé dans `src/styles/theme.ts`. Vous y trouverez :
- Palettes de couleurs
- Typographie
- Espacements
- Bordures et ombres
- Points de rupture responsive
- Transitions

## 🎊 Événements

L'application présente :
- Quêtes glaciales
- Récompenses légendaires
- Boss d'hiver
- Union Alliance/Horde pour les festivités

---

**Pour l'Alliance ! Pour la Horde ! Pour Azeroth !** ⚔️
