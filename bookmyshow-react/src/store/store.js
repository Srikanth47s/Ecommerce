import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "./CartCount"

export default configureStore({
    reducer:{
        cartItems: cartItemsReducer
    }
}

)