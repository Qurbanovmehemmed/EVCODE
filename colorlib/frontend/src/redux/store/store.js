import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import wishlistSlice from "../features/wishlistSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, wishlistSlice.reducer);

const store = configureStore({
  reducer: {
    products: productSlice,
    wishlist: persistedReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export default store;
