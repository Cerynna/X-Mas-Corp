export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD") // Décompose les accents
    .replace(/\p{Diacritic}/gu, "") // Supprime les diacritiques
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Remplace les espaces par -
  .replace(/[^a-z0-9-]/g, "") // Supprime tout sauf lettres, chiffres et tirets
  .replace(/--+/g, "-"); // Remplace les tirets multiples par un seul
}
