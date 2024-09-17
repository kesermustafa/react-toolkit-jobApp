import {configureStore} from "@reduxjs/toolkit";
import jobReducer from "./slice/jobSlice.js";

const store = configureStore({
    reducer: {
        jobReducer,
    }
})

export default store;