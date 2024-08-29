import { configureStore } from "@reduxjs/toolkit";
import wishlist from "./wishlists";
import cartSlice from "./cart"

const store = configureStore({
    reducer:{
        wishlistRedeucer : wishlist,
        cartReducer : cartSlice

    }
})

export default store;

