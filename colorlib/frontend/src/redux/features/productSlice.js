import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/products";

const initialState = {
  products: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(BASE_URL);
    return response?.data.products;
  }
);


export const deletePost = createAsyncThunk(
  "products/deletePost",
  async (_id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${_id}`);
      if (response?.status === 200) return _id;
      return `${response.status} : ${response.statusText}`;
    } catch (error) {
      return error.message;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortAzProducts: (state) => {
      state.products = state.products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    },
    sortZaProducts: (state) => {
      state.products = state.products.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    },
    sortLowToHigh: (state) => {
      state.products = state.products.sort((a, b) => a.price - b.price);
    },
    sortHighToLow: (state) => {
      state.products = state.products.sort((a, b) => b.price - a.price);
    },
  },

  extraReducers(builder) {
    builder

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action?.payload) {
          console.log("could not delete");
          console.log(action.payload);
          return;
        }

        const _id = action.payload;
        state.products = state.products.filter((post) => post._id !== _id);
      });
  },
});

export const { sortAzProducts, sortZaProducts, sortLowToHigh, sortHighToLow } =
  productSlice.actions;

export default productSlice.reducer;
