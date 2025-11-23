# 🔥 Firebase - Intégration Complète

## ✅ Ce qui a été ajouté

### 📦 Packages installés
- `firebase` - SDK Firebase complet

### 🔧 Configuration Firebase (`src/firebase/`)

#### 1. **config.ts** - Configuration principale
- Initialisation de Firebase avec variables d'environnement
- Services activés :
  - **Authentication** - Gestion des utilisateurs
  - **Firestore** - Base de données NoSQL
  - **Storage** - Stockage de fichiers
  - **Analytics** - Suivi analytique

#### 2. **auth.ts** - Authentification
Fonctions disponibles :
- `signUp(email, password, displayName)` - Créer un compte
- `signIn(email, password)` - Se connecter
- `signInWithGoogle()` - Connexion Google
- `logOut()` - Se déconnecter
- `resetPassword(email)` - Réinitialiser le mot de passe
- `onAuthChange(callback)` - Observer les changements d'état
- `getCurrentUser()` - Obtenir l'utilisateur actuel

#### 3. **firestore.ts** - Base de données
Interfaces TypeScript :
- `WowEvent` - Événements du jeu
- `Character` - Personnages des joueurs
- `Guild` - Guildes Alliance/Horde

Fonctions CRUD :
- `createDocument(collection, data)` - Créer
- `getDocument(collection, id)` - Lire un document
- `getDocuments(collection, constraints)` - Lire plusieurs
- `updateDocument(collection, id, data)` - Mettre à jour
- `deleteDocument(collection, id)` - Supprimer

Fonctions spécialisées :
- `getActiveEvents()` - Événements actifs
- `createEvent(data)` - Créer un événement
- `getCharactersByUser(userId)` - Personnages d'un joueur
- `createCharacter(data)` - Créer un personnage
- `getGuildsByFaction(faction)` - Guildes par faction
- `createGuild(data)` - Créer une guilde

### 🎯 Contextes React (`src/contexts/`)

#### **AuthContext.tsx** + **useAuth.ts**
- Contexte d'authentification global
- Hook personnalisé `useAuth()`
- Accès à `user` et `loading` dans toute l'app

### 🎨 Composants UI (`src/components/`)

#### **AuthForm.tsx**
Modal d'authentification avec :
- Formulaire inscription/connexion
- Validation des champs
- Connexion Google
- Gestion des erreurs
- Design WoW intégré

#### **Header.tsx**
En-tête de l'application avec :
- Logo animé
- Informations utilisateur
- Avatar personnalisé
- Bouton connexion/déconnexion
- Design sticky et responsive

### 🔐 Sécurité

#### **.env.example**
Template pour les variables d'environnement :
```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
...
```

#### **.gitignore** (mis à jour)
Fichiers exclus du versioning :
- `.env` et `.env.local`
- Fichiers de debug Firebase
- Dossier `.firebase/`

### 📚 Documentation

#### **FIREBASE.md**
Guide complet avec :
- Configuration étape par étape
- Règles de sécurité Firestore
- Exemples de code
- Guide de déploiement Firebase Hosting

## 🚀 Pour commencer

### 1. Configuration initiale

```bash
# Copier le fichier d'exemple
cp .env.example .env

# Éditer .env avec vos clés Firebase
nano .env
```

### 2. Obtenir les clés Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Créez un projet (ou utilisez un existant)
3. Ajoutez une application Web
4. Copiez la configuration dans `.env`

### 3. Activer les services

Dans Firebase Console :
- **Authentication** → Email/Password et Google
- **Firestore Database** → Mode test ou production
- **Storage** → Règles de sécurité (optionnel)

### 4. Utilisation dans l'app

```tsx
import { useAuth } from './contexts';
import { signIn, createEvent } from './firebase';

function MonComposant() {
  const { user, loading } = useAuth();
  
  // L'utilisateur est disponible partout !
  if (user) {
    return <div>Bienvenue {user.displayName}!</div>;
  }
  
  return <button onClick={() => signIn(...)}>Connexion</button>;
}
```

## 📊 Collections Firestore suggérées

```javascript
// Collection: events
{
  title: "Tempête de Givre",
  subtitle: "Boss Mondial",
  icon: "❄️",
  variant: "frost",
  reward: "Monture Légendaire",
  startDate: Timestamp,
  endDate: Timestamp,
  isActive: true,
  participants: 0
}

// Collection: characters
{
  userId: "firebase-uid",
  name: "Arthas",
  faction: "alliance",
  level: 60,
  class: "Paladin",
  race: "Humain",
  guildId: "guild-id",
  achievements: []
}

// Collection: guilds
{
  name: "Chevaliers d'Argent",
  faction: "alliance",
  leaderUserId: "user-id",
  members: ["user-id-1", "user-id-2"],
  level: 10,
  description: "Guilde RP/PvE"
}
```

## 🛡️ Règles de sécurité

Les règles Firestore sont essentielles ! Exemple dans `FIREBASE.md` :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }
    
    match /events/{eventId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 🎯 Fonctionnalités disponibles

### ✅ Déjà implémenté
- ✅ Authentification complète (Email + Google)
- ✅ Contexte React pour l'auth
- ✅ Formulaire de connexion/inscription
- ✅ Header avec infos utilisateur
- ✅ Fonctions CRUD Firestore
- ✅ Interfaces TypeScript
- ✅ Gestion des erreurs
- ✅ Design WoW intégré

### 🚧 À développer
- Page de profil utilisateur
- Création/gestion de personnages
- Système de guildes
- Liste des événements depuis Firestore
- Système de récompenses
- Quêtes et achievements
- Chat entre joueurs
- Classements

## 📝 Exemples de code

### Créer un événement
```tsx
import { createEvent } from './firebase';

const newEvent = await createEvent({
  title: "Bataille de Glace",
  subtitle: "PvP Arène",
  description: "Combat épique...",
  icon: "⚔️",
  variant: "frost",
  reward: "Titre: Champion",
  startDate: new Date(),
  endDate: new Date(Date.now() + 86400000),
  isActive: true,
  participants: 0
});
```

### Récupérer les événements
```tsx
import { getActiveEvents } from './firebase';
import { useEffect, useState } from 'react';

function EventsList() {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    getActiveEvents().then(setEvents);
  }, []);
  
  return events.map(e => <div key={e.id}>{e.title}</div>);
}
```

### Créer un personnage
```tsx
import { createCharacter } from './firebase';
import { useAuth } from './contexts';

function CreateChar() {
  const { user } = useAuth();
  
  const handleCreate = async () => {
    await createCharacter({
      userId: user.uid,
      name: "Thrall",
      faction: "horde",
      level: 1,
      class: "Chaman",
      race: "Orc",
      achievements: []
    });
  };
}
```

## 🔥 Firebase est prêt !

Votre application est maintenant équipée de :
- 🔐 Système d'authentification complet
- 📊 Base de données Firestore
- 👤 Gestion des utilisateurs
- 🎨 UI intégrée au thème WoW
- 📱 Responsive et sécurisé

**Consultez FIREBASE.md pour le guide complet !**
