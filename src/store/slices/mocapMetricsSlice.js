import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    gaitTestShow: false,
    shoulderRomShow: false,
    slbShow: false,
    sitToStandShow: false,
    stepTestShow: false,
    tugShow: false,
    shoulderRomLeft: true
}
const mocapTableStatusSlice = createSlice({
    name: 'mocapTableShowStatus',
    initialState,
    reducers: {
        changeGaitTableStatus(state,action) {
            state.gaitTestShow = action.payload;
        },
        changeShoulderTableStatus(state,action) {
            state.shoulderRomShow = action.payload;
        },
        changeSlbTableStatus(state,action) {
            state.slbShow = action.payload;
        },
        changeSitToStandTableStatus(state,action) {
            state.sitToStandShow = action.payload;
        },
        changeStepTableStatus(state,action) {
            state.stepTestShow = action.payload;
        },
        changeTugTableStatus(state,action) {
            state.tugShow = action.payload;
        },
        changeShoulderLeft(state,action) {
            state.shoulderRomLeft = action.payload;
        }
    }
});

export const {
    changeGaitTableStatus,
    changeShoulderTableStatus,
    changeSlbTableStatus,
    changeSitToStandTableStatus,
    changeStepTableStatus,
    changeTugTableStatus,
    changeShoulderLeft} = mocapTableStatusSlice.actions;
export default mocapTableStatusSlice.reducer;