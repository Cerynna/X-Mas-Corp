// URLs des icônes de sorts WoW depuis Wowhead
// Format: https://wow.zamimg.com/images/wow/icons/large/[icon-name].jpg

export const SPELL_ICONS = {
  // Monk
  jab: "ability_monk_jab",
  "keg-smash": "ability_monk_kegsmash",
  "rising-sun-kick": "ability_monk_risingsunkick",
  "blackout-kick": "ability_monk_blackoutkick",
  "fists-of-fury": "monk_ability_fistoffury",
  "spinning-crane-kick": "ability_monk_cranekick_new",

  // Warrior
  "heroic-strike": "ability_rogue_ambush",
  "mortal-strike": "ability_warrior_savageblow",
  whirlwind: "ability_whirlwind",
  recklessness: "ability_criticalstrike",
  execute: "inv_sword_48",

  // Paladin
  "crusader-strike": "spell_holy_crusaderstrike",
  "holy-light": "spell_holy_holybolt",
  "divine-storm": "ability_paladin_divinestorm",
  "hammer-of-wrath": "ability_thunderbolt",
  "divine-shield": "spell_holy_divineintervention",

  // Hunter
  "arcane-shot": "ability_impalingbolt",
  "multi-shot": "ability_upgrademoonglaive",
  "aimed-shot": "inv_spear_07",
  "explosive-shot": "ability_hunter_explosiveshot",
  "kill-shot": "ability_hunter_assassinate2",

  // Rogue
  backstab: "ability_backstab",
  "sinister-strike": "spell_shadow_ritualofsacrifice",
  eviscerate: "ability_rogue_eviscerate",
  "kidney-shot": "ability_rogue_kidneyshot",
  "shadow-dance": "ability_rogue_shadowdance",

  // Priest
  smite: "spell_holy_holysmite",
  heal: "spell_holy_heal",
  "shadow-word-pain": "spell_shadow_shadowwordpain",
  "mind-blast": "spell_shadow_unholyfrenzy",
  "divine-hymn": "spell_holy_divinehymn",

  // Shaman
  "lightning-bolt": "spell_nature_lightning",
  "earth-shock": "spell_nature_earthshock",
  "lava-burst": "spell_shaman_lavaburst",
  "chain-lightning": "spell_nature_chainlightning",
  "elemental-mastery": "spell_nature_wispheal",

  // Mage
  fireball: "spell_fire_flamebolt",
  frostbolt: "spell_frost_frostbolt02",
  "arcane-missiles": "spell_nature_starfall",
  pyroblast: "spell_fire_fireball02",
  "arcane-power": "spell_nature_lightning",

  // Warlock
  "shadow-bolt": "spell_shadow_shadowbolt",
  immolate: "spell_fire_immolation",
  "chaos-bolt": "ability_warlock_chaosbolt",
  soulfire: "spell_fire_fireball02",
  "dark-soul": "spell_shadow_shadetruesight",

  // Druid
  wrath: "spell_nature_abolishmagic",
  moonfire: "spell_nature_starfall",
  starfire: "spell_arcane_starfire",
  starfall: "ability_druid_starfall",
  incarnation: "spell_druid_incarnation",

  // Death Knight
  "death-strike": "spell_deathknight_butcher2",
  obliterate: "spell_deathknight_classicon",
  "frost-strike": "spell_deathknight_empowerruneblade2",
  "soul-reaper": "ability_deathknight_soulreaper",
  apocalypse: "artifactability_unholydeathknight_deathsembrace",

  // Base actions
  attack: "inv_sword_04",
  defend: "ability_defend",
  flee: "ability_rogue_sprint",

  // Potions
  "health-potion": "inv_potion_54",
  "mana-potion": "inv_potion_76",
} as const;

export type SpellIconKey = keyof typeof SPELL_ICONS;

export function getSpellIconUrl(iconKey: string): string {
  const iconName = SPELL_ICONS[iconKey as SpellIconKey];
  if (!iconName) {
    console.warn(`Icon not found for key: ${iconKey}`);
    return '';
  }
  return `https://wow.zamimg.com/images/wow/icons/large/${iconName}.jpg`;
}

// URLs directes pour les actions de base
export const BASE_ACTION_ICONS = {
  attack: getSpellIconUrl('attack'),
  defend: getSpellIconUrl('defend'),
  flee: getSpellIconUrl('flee'),
};
