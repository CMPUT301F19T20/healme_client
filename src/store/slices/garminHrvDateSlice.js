import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    date: "2022-05-31"
}
const garminHrvDateSlice = createSlice({
    name: 'garminHrvDate',
    initialState,
    reducers: {
        changeHrvDate(state,action) {
            state.date = action.payload;
        }
    }
});

export const {changeHrvDate} = garminHrvDateSlice.actions;
export default garminHrvDateSlice.reducer;