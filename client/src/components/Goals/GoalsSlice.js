import React, { useEffect, useState } from "react";
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Axios from 'axios'

export const getGoals = createAsyncThunk("goals/get", async (thunkAPI) => {
    try {
        const response = await Axios.get("http://127.0.0.1:5555/habits");
        return response.data
    } catch (error) {
        const {rejectWithValue} = thunkAPI;
        return rejectWithValue(error.response.data);
    }
})

const initGoalsState = {
    goalsList: [],
    loading: "idle",
    error: null,
}

const goalsSlice = createSlice({
    name: 'goals',
    initialState: initGoalsState,
    reducers: {},
    extraReducers: (builder) => {
            builder.addCase(getGoals.pending, (state) => {
                if (state.loading === "idle") {
                    state.loading = "pending";
                }
            })
            builder.addCase(getGoals.fulfilled, (state, action) => {
                if (state.loading === "pending") {
                    state.loading = "idle";
                    state.goalsList = action.payload;
                }
            })
            builder.addCase(getGoals.rejected, (state, action) => {
                if (state.loading === "pending") {
                    state.loading = "idle";
                    state.error = action.error;
                }
            })
        },
    })

export default goalsSlice.reducer;
