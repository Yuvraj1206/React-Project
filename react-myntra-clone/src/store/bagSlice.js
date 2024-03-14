import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addItemsToBag: (state, action) => {
      state.push(action.payload);
    },
    removeItemsOfBag: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const bagAction = bagSlice.actions;
export default bagSlice;
