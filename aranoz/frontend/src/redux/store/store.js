import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import wishlistSlice from "../features/wishlistSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import basketSlice from "../features/basketSlice";

const persistConfig = {
  key: "root",
  storage,
};



const persistedReducer = persistReducer(persistConfig, wishlistSlice.reducer);
const persistedReducerBasket = persistReducer(
  persistConfig,
  basketSlice.reducer
);

const store = configureStore({
  reducer: {
    products: productSlice,
    wishlist: persistedReducer,
    basket: persistedReducerBasket,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export default store;
