# Analyse de la Progression des Stats dans X-Mas-Corp

## Objectif

Rendre la progression des stats (PV, dégâts, réduction de dégâts, etc.) linéaire et cohérente pour les joueurs et les monstres. Plus le niveau augmente, plus les stats augmentent de façon prévisible.

---

## 1. Où sont manipulées les stats ?

### Joueur
- **Création du personnage** :
  - `/src/contexts/CharacterContext.tsx` (ligne ~82)
    - Les stats de base sont initialisées selon la classe/race.
    - Progression des stats via le niveau et l'équipement.
  - **Stats dérivées** :
    - `attackPower`, `spellPower`, `armor`, `critChance` calculés selon les attributs principaux.
    - Progression lors du level up (Battle.tsx, CharacterContext.tsx).
- **Affichage des stats** :
  - `/src/components/Dashboard/Stats.tsx` (total des stats, affichage des PV, mana, puissance, etc.)
- **Combat** :
  - `/src/types/battle.ts` :
    - `calculateDamage` utilise `attackPower`, `damage`, `strength`, `critChance`.
    - Réduction de dégâts via l'armure.
    - Level du joueur impacte peu la réduction (à vérifier).

### Monstres
- **Définition des templates** :
  - `/src/types/monsters.ts` :
    - `MonsterTemplate` : `baseHealth`, `baseDamage`, `baseArmor`, etc.
    - Progression par niveau via `createMonsterFromTemplate` (ligne ~415)
      - `levelMultiplier = 1 + (level - 1) * 0.35` (progression linéaire mais modérée)
      - Les stats sont multipliées par ce facteur.
- **Affichage** :
  - `/src/pages/Bestiary.tsx` :
    - Affiche les stats de base des monstres.
- **Combat** :
  - `/src/types/battle.ts` :
    - `calculateDamage` pour les monstres utilise `damage`, `level`, `armor`.
    - Réduction de dégâts via l'armure du joueur.

### Abilities & Equipment
- **Abilities** :
  - `/src/types/abilities.ts` :
    - Les compétences ont des dégâts en % ou en valeur brute.
    - Progression par niveau via `baseDamage` et `manaCostPerLevel`.
- **Equipment** :
  - `/src/types/equipment.ts` :
    - Les équipements ajoutent des stats (force, agilité, etc.)
    - Progression via le niveau requis et la qualité.
    - `calculateEquipmentStats` additionne les stats de tous les équipements portés.

---

## 2. Calculs de Progression Actuels

### Joueur
- **Level Up** :
  - Les stats augmentent lors du passage de niveau (Battle.tsx, CharacterContext.tsx).
  - Formules actuelles :
    - `attackPower = 5 + Math.floor(strength * 0.5)`
    - `spellPower = 5 + Math.floor(intellect * 0.5)`
    - `armor = agility + stamina`
    - `critChance = 5 + (agility * 0.1)`
  - **Problème** :
    - Progression non linéaire si les stats de base n'augmentent pas assez par niveau.
    - L'équipement peut déséquilibrer la progression.

### Monstres
- **Progression** :
  - `levelMultiplier = 1 + (level - 1) * 0.35` (progression linéaire mais faible)
  - Les stats de base sont multipliées par ce facteur.
  - **Problème** :
    - Si le joueur progresse plus vite que le monstre, le jeu devient trop facile.
    - Si le monstre progresse trop vite, le jeu devient trop dur.

### Combat
- **Réduction de dégâts** :
  - `damageReduction = defender.armor * (isMonster ? 1 : defender.level) * 0.1`
  - **Problème** :
    - La réduction dépend de l'armure et du niveau du défenseur (pour le joueur).
    - Peut créer des paliers de difficulté non linéaires.

---

## 3. Recommandations pour une Progression Linéaire

### 1. **Stats de base par niveau**
- Augmenter les stats de base du joueur et du monstre à chaque niveau de façon linéaire :
  - Exemple :
    - PV = PV_base + (niveau - 1) * PV_gain_par_niveau
    - Dégâts = Dégâts_base + (niveau - 1) * Dégâts_gain_par_niveau
    - Armure = Armure_base + (niveau - 1) * Armure_gain_par_niveau

### 2. **Progression des équipements**
- Les équipements doivent donner des bonus proportionnels au niveau requis.
- Limiter l'écart entre équipement faible et fort pour éviter les déséquilibres.

### 3. **Réduction de dégâts**
- Utiliser une formule simple et linéaire :
  - Exemple : `damageReduction = armor * 0.5` (ou autre facteur fixe)
  - Éviter de multiplier par le niveau pour garder la progression linéaire.

### 4. **Abilities**
- Les dégâts des compétences doivent scaler avec le niveau ou la stat principale.
- Exemple : `damage = baseDamage + (niveau * scaling)`

### 5. **XP et Level Up**
- Progression de l'XP requise pour le niveau suivante doit être linéaire ou légèrement exponentielle.

---

## 4. Fichiers à Modifier

- `/src/contexts/CharacterContext.tsx` : Initialisation et progression des stats du joueur.
- `/src/types/monsters.ts` : Progression des stats des monstres.
- `/src/types/battle.ts` : Formule de calcul des dégâts et réduction.
- `/src/types/equipment.ts` : Progression des stats des équipements.
- `/src/types/abilities.ts` : Scaling des compétences.
- `/src/components/Dashboard/Stats.tsx` : Affichage des stats.
- `/src/components/Battle.tsx` : Level up et progression.

---

## 5. Suggestions de Formules

### PV
- Joueur : `maxHealth = baseHealth + (level - 1) * healthPerLevel`
- Monstre : `maxHealth = baseHealth + (level - 1) * healthPerLevel`

### Dégâts
- Joueur : `damage = baseDamage + (level - 1) * damagePerLevel`
- Monstre : `damage = baseDamage + (level - 1) * damagePerLevel`

### Armure
- Joueur/Monstre : `armor = baseArmor + (level - 1) * armorPerLevel`

### Réduction
- `damageReduction = armor * 0.5` (à ajuster selon le ressenti)

---

## 6. Points d'attention
- Bien tester la courbe de progression pour éviter les paliers trop durs ou trop faciles.
- Ajuster les formules selon le ressenti en jeu.
- Garder la progression simple et lisible dans le code.

---

## 7. Conclusion

Pour une progression linéaire, il faut :
- Harmoniser les formules de stats pour le joueur et les monstres.
- S'assurer que chaque niveau apporte un gain constant et prévisible.
- Adapter les équipements et compétences pour suivre cette progression.

**Fichiers à modifier en priorité :**
- `/src/contexts/CharacterContext.tsx`
- `/src/types/monsters.ts`
- `/src/types/battle.ts`
- `/src/types/equipment.ts`
- `/src/types/abilities.ts`

N'hésite pas à demander une refonte des formules ou un exemple de code pour chaque stat !