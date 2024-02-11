import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        increment: (state, {payload: productId}) =>{
            state[productId] = (state[productId] || 0) + 1;
        },
        decrement: (state, {payload: productId}) =>{
            state[productId] = (state[productId] || 0) - 1;

            if(state[productId] <= 0) {
                delete state[productId];
            }
        }
    },
    selectors: {
        selectProductAmountById: (state, id) =>{
            return state[id] || 0;
        },
        selectProductTotalAmount: (state) =>{
            return Object.values(state).reduce((acc, amount) => acc + amount, 0);
        },
        selectProductIds: (state) =>{
            return Object.keys(state);
        }
    }
});

export const { 
    selectProductAmountById, 
    selectProductTotalAmount, 
    selectProductIds 
} = cartSlice.selectors;
export const cartActions = cartSlice.actions;