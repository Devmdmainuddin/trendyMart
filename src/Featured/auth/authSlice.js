import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null,
};
export const registerUser = createAsyncThunk(
    "user",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                "https://shop-fusion-server-one.vercel.app/user", 
                formData,
                {
                    withCredentials: true,
                }
            );
            return response.data;
        } catch (error) {
            // Log the error to see what's happening
            console.error("Error during registration:", error);
            return rejectWithValue(error.response.data);
        }
    }
);
export const loginUser = createAsyncThunk(
    "/auth/login",

    async (formData) => {
        const response = await axios.post(
            "shop-fusion-server-one.vercel.app/api/auth/login",
            formData,
            {
                withCredentials: true,
            }
        );

        return response.data;
    }
);
export const logoutUser = createAsyncThunk(
    "/auth/logout",

    async () => {
        const response = await axios.post(
            "shop-fusion-server-one.vercel.app/api/auth/logout",
            {},
            {
                withCredentials: true,
            }
        );

        return response.data;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => { },
    },
    extraReducers: (builder) => {
        builder
          .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;
          })
          .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action);
    
            state.isLoading = false;
            state.user = action.payload.success ? action.payload.user : null;
            state.isAuthenticated = action.payload.success;
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;
          })
          .addCase(logoutUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;
          });
      },
})
export const { setUser } = authSlice.actions;
export default authSlice.reducer;

