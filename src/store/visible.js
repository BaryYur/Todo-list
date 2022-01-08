import { createSlice } from '@reduxjs/toolkit'; 
const initialVisibleState = { visibility: false };

const navSlice = createSlice({
    name: 'visibility', 
    initialState: initialVisibleState,
    reducers: {
        visible(state) {
            state.visibility = true;
        },
        inVisible(state) {
            state.visibility = false;
        },
    },
});

export const navActions = navSlice.actions;

export default navSlice.reducer;