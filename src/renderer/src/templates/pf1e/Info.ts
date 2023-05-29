export const abilities = {
  str: "",
  dex: "",
  con: "",
  wis: "",
  int: "",
  cha: "",
};

export const tabs = ["info", "details"];

export const tabsFields = {
  info: {
    name: "",
    race: "",
    class: "",
    level: "",
  },
  details: {
    gender: "",
    age: "",
    skin: "",
    hair: "",
    eyes: "",
    height: "",
    weight: "",
    misc: "",
  },
};

export const extraSpellFormula = (spellLvl: number, abilityScore: number) => {
  if (spellLvl === 0) return 0;
  return Math.round((abilityScore - spellLvl) / 4 + 0.5);
};

export const abilityScoreModifierFormula = (ability: number) => {
  const minNum = ability % 2 === 0 ? ability : ability - 1;
  return minNum - (5 + Math.floor(minNum / 2));
};
