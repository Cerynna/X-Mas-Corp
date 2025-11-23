# 🔥 Guide Firebase Realtime Database - Xmas Corp

## Configuration initiale

### 1️⃣ Créer un projet Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Cliquez sur "Ajouter un projet"
3. Nommez votre projet (ex: "xmas-corp-wow")
4. Suivez les étapes de configuration

### 2️⃣ Ajouter une application Web

1. Dans votre projet Firebase, cliquez sur l'icône Web `</>`
2. Enregistrez votre application
3. Copiez la configuration Firebase fournie (incluant `databaseURL`)

### 3️⃣ Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet :

```bash
cp .env.example .env
```

Remplissez les valeurs avec votre configuration Firebase :

```env
VITE_FIREBASE_API_KEY=votre-api-key
VITE_FIREBASE_AUTH_DOMAIN=votre-projet.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://votre-projet-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=votre-projet-id
VITE_FIREBASE_STORAGE_BUCKET=votre-projet.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=votre-sender-id
VITE_FIREBASE_APP_ID=votre-app-id
VITE_FIREBASE_MEASUREMENT_ID=votre-measurement-id
```

**⚠️ Important :** La `databaseURL` est essentielle pour Realtime Database !

### 4️⃣ Activer les services Firebase

#### Authentication
1. Dans Firebase Console, allez dans **Authentication**
2. Cliquez sur **Get Started**
3. Activez les méthodes de connexion :
   - ✅ Email/Password
   - ✅ Google (optionnel)

#### Realtime Database
1. Allez dans **Realtime Database** (pas Firestore !)
2. Cliquez sur **Create Database**
3. Choisissez la région (ex: europe-west1)
4. Commencez en **mode test** (pour le développement)

#### Storage (optionnel)
1. Allez dans **Storage**
2. Cliquez sur **Get Started**

## 📂 Structure Realtime Database

Le projet utilise une structure JSON avec les collections suivantes :

```json
{
  "users": {
    "user-id-1": { ... }
  },
  "events": {
    "event-id-1": { ... }
  },
  "characters": {
    "char-id-1": { ... }
  },
  "guilds": {
    "guild-id-1": { ... }
  }
}
```

### Règles de sécurité

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "auth != null",
        ".write": "$uid === auth.uid"
      }
    },
    "events": {
      ".read": true,
      "$eventId": {
        ".write": "auth != null"
      }
    },
    "characters": {
      ".read": "auth != null",
      "$characterId": {
        ".write": "auth != null && (!data.exists() || data.child('userId').val() === auth.uid)"
      }
    },
    "guilds": {
      ".read": "auth != null",
      "$guildId": {
        ".write": "auth != null"
      }
    }
  }
}
```

## 📊 Utilisation

### Créer un événement

```tsx
import { createEvent } from './firebase';

await createEvent({
  title: "Tempête de Givre",
  subtitle: "Boss Mondial",
  icon: "❄️",
  variant: "frost",
  reward: "Monture Légendaire",
  startDate: Date.now(),
  endDate: Date.now() + 7 * 24 * 60 * 60 * 1000,
  isActive: true,
  participants: 0,
});
```

### Lire les événements

```tsx
import { getActiveEvents } from './firebase';

const events = await getActiveEvents();
```

### Écouter les changements en temps réel ⚡

```tsx
import { onActiveEventsChange } from './firebase';

useEffect(() => {
  const unsubscribe = onActiveEventsChange((events) => {
    setEvents(events);
    console.log('Mise à jour en temps réel!');
  });
  
  return () => unsubscribe();
}, []);
```

## 🔄 Temps réel

L'avantage majeur de Realtime Database : **synchronisation instantanée** !

Quand un joueur met à jour un événement, tous les autres le voient immédiatement sans rafraîchir la page.

## 🛡️ Sécurité

- ✅ `.env` dans `.gitignore`
- ✅ Règles de sécurité configurées
- ✅ Validation des données
- ✅ Authentication requise

## 📚 Documentation complète

Voir le fichier pour plus de détails sur :
- Toutes les fonctions disponibles
- Exemples d'utilisation
- Déploiement Firebase Hosting
- Règles de sécurité avancées

---

**Firebase Realtime Database est prêt ! 🔥**
