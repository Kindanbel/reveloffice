/* Where we would manage and configure the whle redux store*/

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart';

export const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})