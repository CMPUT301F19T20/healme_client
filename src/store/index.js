import {configureStore } from "@reduxjs/toolkit";
import garminSleepDateReducer from "./slices/garminSleepDateSlice";
import garminHrvDateReducer from "./slices/garminHrvDateSlice";
import mocapTableStatusReducer from "./slices/mocapMetricsSlice"

export const store = configureStore({
    reducer:{ garminSleepDate : garminSleepDateReducer, 
            garminHrvDate: garminHrvDateReducer,
            mocapTableStatus: mocapTableStatusReducer }
});

