import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = any | null;

const accountSlice = createSlice({
  name: "account",
  initialState: { currentUser: null as User },
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;
