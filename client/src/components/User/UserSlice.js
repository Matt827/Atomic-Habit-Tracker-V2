import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { Axios } from "axios";

const initUserState = {
    loggedInUser: null,
    signupState: {loading: "idle", error: null, currentRequestID: undefined},
}

export const signupUser = createAsyncThunk("user/signup", async (userInfo, thunkAPI) => {
    const {loading, currentRequestID} = thunkAPI.getState().user.signupState;
    if (loading !== "pending" || thunkAPI !== currentRequestID) {
        return
    }
    
    try {
        const response = await Axios.post("user/signup", userInfo)
        return response.data
    } catch (error) {
        const {rejectWithValue} = thunkAPI;
        return rejectWithValue(error.response.data);
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: initUserState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signupUser.pending, (state, action) => {
            const {signupState} = state;
            if (signupState.loading === "idle") {
                signupState.loading = "pending";
                signupState.currentRequestID = action.meta.requestId
            }
        })
        builder.addCase(signupUser.fulfilled, (state, action) => {
            const {signupState} = state;
            if (signupState.loading === "pending") {
                signupState.loading = "idle";
                signupState.currentRequestID = undefined;
                signupState.error = null
                state.loggedInUser = action.payload
            }
        })
        builder.addCase(signupUser.rejected, (state, action) => {
            const {signupState} = state;
            if (signupState.loading === "pending") {
                signupState.loading = "idle";
                signupState.currentRequestID = undefined;
                signupState.error = action.payload
            }
        })
    },
})

export default userSlice.reducer;