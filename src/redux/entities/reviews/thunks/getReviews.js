import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "../selector";

export const getReviews = createAsyncThunk('restaurant/getReviews',
    async(restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId/${restaurantId}`);

        const result = await response.json();

        return result;
    }, { condition: (_, { getState }) => !selectReviewIds(getState())?.length }
);