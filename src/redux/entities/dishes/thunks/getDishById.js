import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "../selector";

export const getDishById = createAsyncThunk(
    'dishes/getDishById',
    async(dishId) => {
        const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);

        const result = await response.json();

        return result;
    }, { condition: (dishId, { getState }) => !selectDishById(getState(), dishId) }
);