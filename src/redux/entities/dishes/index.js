import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishById } from "./thunks/getDishById";
import { getDishesByRestaurantId } from "./thunks/getDishesByRestaurantId";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dish',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => builder
        .addCase(
            getDishById.fulfilled, (state, { payload }) => entityAdapter.upsertOne(state, payload)
        )
        .addCase(
            getDishesByRestaurantId.fulfilled, (state, {payload}) => entityAdapter.upsertMany(state, payload)
        )

});