# ⚡ IMPORTANT - Activer l'Authentification Anonyme

## 🎯 Action Requise

Pour que l'application fonctionne, vous devez activer l'authentification anonyme dans Firebase :

### Étapes Rapides

1. **Ouvrir Firebase Console** : [console.firebase.google.com](https://console.firebase.google.com/)

2. **Sélectionner votre projet**

3. **Aller dans Authentication** → **Sign-in method**

4. **Activer Anonymous** :
   - Cliquez sur "Anonymous"
   - Basculez le switch sur "Enable"
   - Cliquez sur "Save"

5. **Redémarrer votre application** :
   ```bash
   yarn dev
   ```

## ✨ C'est tout !

Dès que l'authentification anonyme est activée, l'application :
- Connectera automatiquement les utilisateurs
- Permettra la création de personnages
- Sauvegardera les données dans Firebase

## 📖 Documentation Complète

Pour plus de détails sur la configuration Firebase, voir [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)

---

## 🎮 Pourquoi l'Authentification Anonyme ?

- ✅ **Pas d'inscription** - Les joueurs commencent immédiatement
- ✅ **Expérience fluide** - Aucun formulaire à remplir
- ✅ **Simplicité** - Idéal pour un jeu casual
- ✅ **Données sauvegardées** - Les personnages sont persistants
