import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    date: "2016-01-10"
}
const garminSleepDateSlice = createSlice({
    name: 'garminSleepDate',
    initialState,
    reducers: {
        changeSleepDate(state,action) {
            state.date = action.payload;
        }
    }
});

export const {changeSleepDate} = garminSleepDateSlice.actions;
export default garminSleepDateSlice.reducer;