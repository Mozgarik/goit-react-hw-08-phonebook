import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contact";
import { useReducer } from "react";
import userSlice from "./userSlice";




const store = configureStore({
    reducer: {
        contact: contactReducer,
        user: userSlice
    }

})
 


export default store;
