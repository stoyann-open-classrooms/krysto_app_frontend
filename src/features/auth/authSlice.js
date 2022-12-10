import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};


// register new user 
export const register = createAsyncThunk('auth/register', async(user, thunkAPI ) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && user.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


// login user
export const login = createAsyncThunk('auth/login', async(user, thunkAPI ) => {
    console.log(user);
})



export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: { 
    reset: (state) =>  {
        state.isLoading = false
        state.isError = false
        state.isSuccess = false
        state.isMessage = false
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(register.pending, (state) => {
        state.isLoading= true
        })
  
  },
});

export const {reset} = authSlice.actions

export default authSlice.reducer;
