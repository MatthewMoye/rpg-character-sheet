import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CharacterState {
  value: number;
}
const initialState: CharacterState = {
  value: 0,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacter: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { setCharacter } = characterSlice.actions;

export default characterSlice.reducer;
