import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import  productSlice  from "./productSlice";
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    products: productSlice,
    wishlist: wishlistSlice,
  },
});

export default store;
