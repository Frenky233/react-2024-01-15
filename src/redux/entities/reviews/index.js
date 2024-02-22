import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./thunks/getReviewsByRestaurantId";


const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: 'review',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => builder.addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.upsertMany(state, payload);
    }),
});