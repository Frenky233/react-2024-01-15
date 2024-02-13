import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewsById } from "../../restaurants/selector";
import { selectReviewIds } from "../selector";

export const getReviewsByRestaurantId = createAsyncThunk('reviews/getReviewsByRestaurantId',
    async(restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);

        const result = await response.json();

        return result;
    }, { condition: (restaurantId, { getState }) =>{
        const restaurantReviewsIds = selectRestaurantReviewsById(getState(), restaurantId);
        const reviewIds = selectReviewIds(getState());

        return !restaurantReviewsIds.every(id => reviewIds.includes(id));
    } }
);