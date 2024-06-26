import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./UI-slice";
import cartSlice from "./Cart-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
});

export default store;