import { createSlice } from "@reduxjs/toolkit";

export const directorySlice = createSlice({
    name: 'directory',
    initialState: {
        directories:[]
    },
    reducers: {
        addDirectory:  (state, action) =>{
            state.directories.push()
        }
    }
});

export default directorySlice.reducer;