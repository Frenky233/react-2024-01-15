import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishById } from "./thunks/getDishById";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dish',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => builder.addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
    }),
});