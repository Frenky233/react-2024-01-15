import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurants";
import { dishSlice } from "./entities/dishes";
import { userSlice } from "./entities/users";
import { reviewSlice } from "./entities/reviews";
import { cartSlice } from "./ui/cart";
import { requestSlice } from "./ui/request";

export const store = configureStore({
    reducer: combineSlices(restaurantSlice, dishSlice, userSlice, reviewSlice, cartSlice, requestSlice),
});