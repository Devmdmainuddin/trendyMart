import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../ProductAPI/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { reviewApi } from "../../services/reviewApi";

export const store = configureStore({
  reducer: {
 
    [productApi.reducerPath]: productApi.reducer, 
    // [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
// , reviewApi.middleware
});

setupListeners(store.dispatch); // 
