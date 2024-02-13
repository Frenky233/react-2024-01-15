import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from "../selector";

export const getUsers = createAsyncThunk('user/getUsers',
    async() => {
        const response = await fetch('http://localhost:3001/api/users/');

        const result = await response.json();

        return result;
    }, { condition: (_, { getState }) => !selectUserIds(getState())?.length }
);