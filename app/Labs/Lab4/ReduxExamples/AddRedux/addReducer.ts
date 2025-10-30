import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AddState = { sum: number };
type AddPayload = { a: number; b: number };

const initialState: AddState = { sum: 0 };

const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<AddPayload>) => {
      state.sum = action.payload.a + action.payload.b;
    },
  },
});

export const { add } = addSlice.actions;
export default addSlice.reducer;
