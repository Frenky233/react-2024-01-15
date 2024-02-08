import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurants";
import { dishSlice } from "./entities/dishes";
import { userSlice } from "./entities/users";
import { reviewSlice } from "./entities/reviews";

export const store = configureStore({
    reducer: combineSlices(restaurantSlice, dishSlice, userSlice, reviewSlice),
});