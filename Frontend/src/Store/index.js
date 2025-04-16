import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart'; 

export const cartConfig = configureStore({
    reducer: {
        cart: cartReducer,
    }

})
