# 🔧 Configuration Rapide - Résoudre l'Erreur "Index not defined"

## ❌ Erreur

```
Error: Index not defined, add ".indexOn": "userId", for path "/characters", to the rules
```

## ✅ Solution

### Étape 1 : Aller dans la Console Firebase

1. Ouvrez [console.firebase.google.com](https://console.firebase.google.com/)
2. Sélectionnez votre projet
3. Allez dans **Realtime Database**
4. Cliquez sur l'onglet **Règles**

### Étape 2 : Remplacer les Règles

Remplacez le contenu actuel par :

```json
{
  "rules": {
    "characters": {
      ".read": "auth != null",
      ".write": "auth != null",
      ".indexOn": ["userId", "faction", "level"],
      "$characterId": {
        ".read": "auth != null",
        ".write": "auth != null && (!data.exists() || data.child('userId').val() == auth.uid)"
      }
    },
    "events": {
      ".read": true,
      ".write": "auth != null",
      ".indexOn": ["isActive", "startDate", "endDate"]
    },
    "guilds": {
      ".read": "auth != null",
      ".write": "auth != null",
      ".indexOn": ["faction", "leaderUserId"]
    },
    "quests": {
      ".read": "auth != null",
      ".write": "auth != null",
      ".indexOn": ["level", "faction"]
    },
    "users": {
      ".read": "auth != null",
      ".write": "auth != null"
    },
    "rewards": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```

### Étape 3 : Publier

Cliquez sur le bouton **Publier** en haut à droite.

### Étape 4 : Rafraîchir l'Application

Rafraîchissez votre navigateur. L'erreur devrait disparaître ! ✨

---

## 📖 Documentation Complète

Pour une configuration détaillée de Firebase, consultez [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)

## 🎮 Résultat Attendu

Après avoir appliqué ces règles, vous pourrez :
- ✅ Créer un personnage
- ✅ Voir vos stats
- ✅ Sauvegarder dans Firebase
- ✅ Charger votre personnage au prochain login
