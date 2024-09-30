import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../ProductAPI/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from '../CartAPI/cartSlice'
import { categoryApi } from "../ProductAPI/categoryApi";
import { subCategoryApi } from "../ProductAPI/subCategoryApi";
import { brandApi } from "../ProductAPI/brandApi";
// import { reviewApi } from "../../services/reviewApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [categoryApi.reducerPath]:categoryApi.reducer,
    [subCategoryApi.reducerPath]:subCategoryApi.reducer,
    [brandApi.reducerPath]:brandApi.reducer,
    [productApi.reducerPath]: productApi.reducer, 
    // [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware,categoryApi.middleware,subCategoryApi.middleware,brandApi.middleware),
// , reviewApi.middleware
});

setupListeners(store.dispatch); // 
