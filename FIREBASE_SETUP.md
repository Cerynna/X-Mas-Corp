# 🔥 Configuration Firebase - Authentification Anonyme

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

Dans **Realtime Database** > **Règles**, copiez-collez le contenu du fichier `database.rules.json` puis cliquez sur **Publier**.

### 3. Activer Authentication Anonyme ⭐

1. Allez dans **Authentication** > **Sign-in method**
2. Activez **Anonymous** :
   - Cliquez sur "Anonymous"
   - Activez le provider
   - Cliquez sur "Enregistrer"

**✅ C'est tout !** L'authentification anonyme ne nécessite aucune configuration supplémentaire. Les utilisateurs seront automatiquement connectés dès qu'ils ouvrent l'application.

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
- ✅ Être automatiquement connecté en mode anonyme
- ✅ Pouvoir créer un personnage
- ✅ Voir vos données sauvegardées dans Firebase
- ✅ Ne plus voir d'erreurs d'authentification

## 🎮 Fonctionnement de l'Authentification Anonyme

### Avantages
- **Aucune inscription requise** - Les joueurs peuvent commencer immédiatement
- **Pas de formulaire** - Expérience utilisateur fluide
- **Aucun mot de passe à gérer** - Simplifie la sécurité
- **Données persistantes** - Les personnages sont sauvegardés

### Comportement
- À la première visite, un compte anonyme est créé automatiquement
- Un ID unique est assigné à chaque utilisateur
- Les données sont liées à cet ID anonyme
- Le bouton "Nouveau Personnage" permet de créer une nouvelle session

### Note
Les comptes anonymes sont temporaires. Si l'utilisateur supprime ses cookies/cache, il perdra l'accès à son personnage. Pour une application en production, vous pourriez plus tard ajouter la possibilité de "convertir" un compte anonyme en compte permanent (email/password).

## 🔍 Dépannage

### L'application ne se charge pas
→ Vérifiez que l'authentification anonyme est bien activée dans Firebase Console

### Erreur "Index not defined"
→ Les règles Firebase n'ont pas été correctement déployées. Vérifiez l'étape 2.

### Warning "Database lives in a different region"
→ L'URL dans `.env` ne correspond pas à la région de votre base de données. Vérifiez l'étape 4.

## 📚 Structure de la Base de Données

```
xmas-corp-rtdb/
├── characters/
│   └── {characterId}/
│       ├── userId (lié au compte anonyme)
│       ├── name
│       ├── class
│       ├── race
│       └── stats...
├── guilds/
├── events/
├── quests/
└── rewards/
```

## 🔒 Sécurité

Les règles actuelles permettent :
- ✅ Lecture/écriture uniquement pour les utilisateurs authentifiés (même anonymes)
- ✅ Les utilisateurs ne peuvent modifier que leurs propres personnages
- ✅ Index optimisés pour les requêtes fréquentes

---

✨ **Votre application est maintenant prête à être utilisée !**
