# Configuration Firebase - Guide Rapide

## ⚠️ Important : URL de la Base de Données

Si vous voyez cet avertissement dans la console :
```
Database lives in a different region. Please change your database URL to https://xmas-corp-default-rtdb.europe-west1.firebasedatabase.app
```

### Solution :

1. **Créez ou modifiez votre fichier `.env`** à la racine du projet
2. **Mettez à jour la variable `VITE_FIREBASE_DATABASE_URL`** avec la bonne région :

```bash
# Pour Europe West 1
VITE_FIREBASE_DATABASE_URL=https://xmas-corp-default-rtdb.europe-west1.firebasedatabase.app

# OU pour la région US (par défaut)
VITE_FIREBASE_DATABASE_URL=https://xmas-corp-default-rtdb.firebaseio.com
```

3. **Redémarrez le serveur de développement** :
```bash
yarn dev
```

## 🔧 Configuration Complète

Copiez `.env.example` vers `.env` et remplissez avec vos valeurs Firebase :

```bash
cp .env.example .env
```

Ensuite, obtenez vos clés depuis la [Console Firebase](https://console.firebase.google.com/) :
1. Sélectionnez votre projet
2. Allez dans **Paramètres du projet** (⚙️)
3. Scrollez jusqu'à **Vos applications**
4. Copiez la configuration Firebase

## 📍 Trouver la Région de Votre Base de Données

1. Allez dans **Realtime Database** dans la console Firebase
2. L'URL affichée en haut indique la région
3. Copiez cette URL exacte dans votre fichier `.env`

## ✅ Vérification

Une fois configuré correctement, l'avertissement ne devrait plus apparaître et votre base de données fonctionnera normalement.
