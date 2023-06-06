import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CharacterState {
  img: string;
  info: {
    details: {
      name: string;
      race: string;
      class: string;
      level: number;
    };
    description: {
      gender: string;
      age: string;
      skin: string;
      hair: string;
      eyes: string;
      height: string;
      weight: string;
      misc: string;
    };
  };
  stats: {
    currentHp: number;
    maxHp: number;
    movement: number;
    abilites: {
      str: { base: number };
      dex: { base: number };
      con: { base: number };
      wis: { base: number };
      int: { base: number };
      cha: { base: number };
    };
  };
  equipment: [];
}

const initialState: CharacterState = {
  img: "",
  info: {
    details: {
      name: "test",
      race: "test",
      class: "test",
      level: 1,
    },
    description: {
      gender: "gender",
      age: "age",
      skin: "skin",
      hair: "hair",
      eyes: "eyes",
      height: "height",
      weight: "weight",
      misc: "misc",
    },
  },
  stats: {
    currentHp: 10,
    maxHp: 10,
    movement: 10,
    abilites: {
      str: { base: 10 },
      dex: { base: 10 },
      con: { base: 10 },
      wis: { base: 10 },
      int: { base: 10 },
      cha: { base: 10 },
    },
  },
  equipment: [],
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacter: (state, action: PayloadAction<CharacterState>) => {
      state = action.payload;
    },
    setCharacterDescriptionProperty: {
      reducer: (
        state,
        action: PayloadAction<{
          tab: string;
          property: string;
          value: string | number;
        }>
      ) => {
        const { tab, property, value } = action.payload;
        state.info[tab][property] = value;
      },
      prepare: (tab: string, property: string, value: string | number) => {
        return { payload: { tab, property, value } };
      },
    },
    updateCurrentHp: (state, action: PayloadAction<number>) => {
      state.stats.currentHp += action.payload;
    },
  },
});

export const {
  setCharacter,
  setCharacterDescriptionProperty,
  updateCurrentHp,
} = characterSlice.actions;

export default characterSlice.reducer;
