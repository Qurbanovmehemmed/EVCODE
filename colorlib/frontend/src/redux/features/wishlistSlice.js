import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWislist: (state, action) => {
      const existProducts = state.wishlist.find(
        (product) => product._id === action.payload._id
      );
      if (!existProducts) {
        state.wishlist.push({ ...action.payload });
      }
    },
    deleteWislist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (product) => product._id === action.payload._id
      );
    },
  },
});
export const { addWislist, deleteWislist } = wishlistSlice.actions;

export default wishlistSlice;
