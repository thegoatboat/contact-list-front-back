import { configureStore } from "@reduxjs/toolkit";

import ContactSlice from "./ContactSlice";


export default configureStore({
    reducer:{
        contact:ContactSlice
    }
})





