import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import userService from './userService'

const initialState = {
    profil: {},
    users: [],
    user: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}




// Get user profil
export const getProfil = createAsyncThunk(
    'profil/getMe',
    async (_, thunkAPI) => {
      try {
        return await userService.getProfil()
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    },
  )






// Get all users
export const getUsers = createAsyncThunk(
  'profil/getUsers',
  async (_, thunkAPI) => {
    try {
      return await userService.getUsers()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)
export const getUser = createAsyncThunk(
  'profil/getUser',
  async (userId, thunkAPI) => {
    try {
      return await userService.getUser(userId)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)







export const userSlice = createSlice({
    name: 'profil',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
    
        .addCase(getProfil.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getProfil.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.profil = action.payload
        })
        .addCase(getProfil.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.profil = null
        })
        .addCase(getUsers.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getUsers.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.users = action.payload
        })
        .addCase(getUsers.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.users = null
        })
        .addCase(getUser.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getUser.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.user = action.payload
        })
        .addCase(getUser.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
        })
    

      
      
    }
})


export const {reset} = userSlice.actions
export default userSlice.reducer