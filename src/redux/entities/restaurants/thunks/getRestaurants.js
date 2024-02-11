import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selector";

export const getRestaurants = createAsyncThunk('restaurant/getRestaurants',
    async() => {
        const response = await fetch('http://localhost:3001/api/restaurants');

        const result = await response.json();

        return result;
    }, { condition: (_, { getState }) => !selectRestaurantIds(getState())?.length }
);