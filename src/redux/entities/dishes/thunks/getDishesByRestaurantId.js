import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantMenuById } from "../../restaurants/selector";
import { selectDishIds } from "../selector";

export const getDishesByRestaurantId = createAsyncThunk(
    'dishes/getDishesByRestaurantId',
    async (restaurantId) =>{
        const response = await fetch(
            `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
        );

        return await response.json();
    },
    { 
        condition: (restaurantId, { getState }) =>{
            const restaurantDishIds = selectRestaurantMenuById(getState(), restaurantId);
            const dishIds = selectDishIds(getState());

            return !restaurantDishIds.every(id => dishIds.includes(id));
        } 
    }
);