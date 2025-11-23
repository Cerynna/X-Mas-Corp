# 🔥 Configuration Firebase - Guide Complet

## 📋 Prérequis

1. Compte Firebase créé sur [console.firebase.google.com](https://console.firebase.google.com/)
2. Projet Firebase créé (ex: `xmas-corp`)

## 🚀 Étapes de Configuration

### 1. Activer Realtime Database

1. Dans la console Firebase, allez dans **Realtime Database**
2. Cliquez sur **Créer une base de données**
3. Choisissez une région (ex: `europe-west1` pour l'Europe)
4. Commencez en **mode test** (vous changerez les règles après)

### 2. Configurer les Règles de Sécurité

#### Option A : Via la Console Firebase (Recommandé)

1. Allez dans **Realtime Database** > **Règles**
2. Copiez-collez le contenu du fichier `database.rules.json` :

```json
{
  "rules": {
    "users": {
      ".read": "auth != null",
      ".write": "auth != null",
      "$uid": {
        ".read": "auth != null && auth.uid == $uid",
        ".write": "auth != null && auth.uid == $uid"
      }
    },
    "characters": {
      ".read": "auth != null",
      ".write": "auth != null",
      ".indexOn": ["userId", "faction", "level"],
      "$characterId": {
        ".read": "auth != null",
        ".write": "auth != null && (!data.exists() || data.child('userId').val() == auth.uid)"
      }
    },
    "guilds": {
      ".read": "auth != null",
      ".write": "auth != null",
      ".indexOn": ["faction", "leaderUserId"],
      "$guildId": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    },
    "events": {
      ".read": true,
      ".write": "auth != null",
      ".indexOn": ["isActive", "startDate", "endDate"],
      "$eventId": {
        ".read": true,
        ".write": "auth != null"
      }
    },
    "quests": {
      ".read": "auth != null",
      ".write": "auth != null",
      ".indexOn": ["level", "faction"]
    },
    "rewards": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```

3. Cliquez sur **Publier**

#### Option B : Via Firebase CLI

```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Se connecter
firebase login

# Initialiser Firebase dans le projet
firebase init database

# Déployer les règles
firebase deploy --only database
```

### 3. Activer Authentication

1. Allez dans **Authentication** > **Sign-in method**
2. Activez **Email/Password** :
   - Cliquez sur "Email/Password"
   - Activez "Email/Password"
   - Cliquez sur "Enregistrer"
3. Activez **Google** :
   - Cliquez sur "Google"
   - Activez le provider
   - Ajoutez un email d'assistance
   - Cliquez sur "Enregistrer"

### 4. Configurer les Variables d'Environnement

1. Copiez `.env.example` vers `.env` :
```bash
cp .env.example .env
```

2. Dans la console Firebase, allez dans **Paramètres du projet** (⚙️)

3. Scrollez jusqu'à **Vos applications** et cliquez sur l'icône web `</>`

4. Copiez les valeurs de configuration et remplissez votre `.env` :

```bash
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=xmas-corp.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://xmas-corp-default-rtdb.europe-west1.firebasedatabase.app
VITE_FIREBASE_PROJECT_ID=xmas-corp
VITE_FIREBASE_STORAGE_BUCKET=xmas-corp.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
VITE_FIREBASE_MEASUREMENT_ID=G-ABC123XYZ
```

**⚠️ Important** : L'URL de la base de données doit correspondre à la région :
- Europe : `https://[PROJECT_ID]-default-rtdb.europe-west1.firebasedatabase.app`
- USA : `https://[PROJECT_ID]-default-rtdb.firebaseio.com`

### 5. Redémarrer le Serveur

```bash
yarn dev
```

## ✅ Vérification

Après configuration, vous devriez :
- ✅ Pouvoir créer un compte
- ✅ Pouvoir vous connecter avec Google
- ✅ Pouvoir créer un personnage
- ✅ Ne plus voir l'erreur "Index not defined"
- ✅ Ne plus voir l'avertissement sur la région

## 🔍 Dépannage

### Erreur "Index not defined"
→ Les règles Firebase n'ont pas été correctement déployées. Vérifiez l'étape 2.

### Warning "Database lives in a different region"
→ L'URL dans `.env` ne correspond pas à la région de votre base de données. Vérifiez l'étape 4.

### "Cross-Origin-Opener-Policy"
→ Avertissement normal lors de l'utilisation de Google Sign-In. Peut être ignoré en développement.

### Impossible de créer un personnage
→ Vérifiez que les règles permettent l'écriture et que les index sont définis.

## 📚 Structure de la Base de Données

```
xmas-corp-rtdb/
├── users/
│   └── {userId}/
│       └── profile, settings, etc.
├── characters/
│   └── {characterId}/
│       ├── userId
│       ├── name
│       ├── class
│       ├── race
│       └── stats...
├── guilds/
│   └── {guildId}/
│       ├── name
│       ├── faction
│       └── members[]
├── events/
│   └── {eventId}/
│       ├── title
│       ├── description
│       └── dates...
├── quests/
│   └── {questId}/
└── rewards/
    └── {rewardId}/
```

## 🔒 Sécurité

Les règles actuelles permettent :
- ✅ Lecture/écriture uniquement pour les utilisateurs authentifiés
- ✅ Les utilisateurs ne peuvent modifier que leurs propres personnages
- ✅ Les événements sont lisibles par tous (public)
- ✅ Index optimisés pour les requêtes fréquentes

## 📝 Notes

- Les règles sont en mode **production** (authentification requise)
- Les index sont définis pour optimiser les performances
- Pensez à sauvegarder régulièrement votre base de données

---

✨ **Votre application est maintenant prête à être utilisée !**
