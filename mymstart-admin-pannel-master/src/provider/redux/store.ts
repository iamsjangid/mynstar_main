import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthApi } from "./query/Auth.query";
import { UserSlice } from "./slice/User.slice";
import { CategoryApi } from "./query/Categories.query";
import { ProductApi } from "./query/Product.query";
import { AdminOrderApi } from "./query/AdminOrder.query";

export const store = configureStore({
    reducer:{
        [AuthApi.reducerPath]:AuthApi.reducer,
        [UserSlice.name]:UserSlice.reducer,
        [CategoryApi.reducerPath]:CategoryApi.reducer,
        [ProductApi.reducerPath]:ProductApi.reducer,
        [AdminOrderApi.reducerPath]: AdminOrderApi.reducer
    },
    middleware: (d) => d().concat(AuthApi.middleware, CategoryApi.middleware, ProductApi.middleware, AdminOrderApi.middleware)
})

setupListeners(store.dispatch)
