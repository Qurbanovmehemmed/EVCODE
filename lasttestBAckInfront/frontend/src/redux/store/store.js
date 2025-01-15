import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { productSlice } from "../features/productSlice";
import basketSlice from "../features/basketSlice";

import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, basketSlice);

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    basket: persistedReducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store);
export default store;
