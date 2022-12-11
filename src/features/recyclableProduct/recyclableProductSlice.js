import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import recyclableProductService from './recyclableProductService'

const initialState = {
  recyclableProducts: [],
  recyclableProduct: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}



// Get all articles
export const getRecyclableProducts = createAsyncThunk(
  'recyclableProducts/getAll',
  async (_, thunkAPI) => {
    try {
      return await recyclableProductService.getRecyclableProducts()
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
export const getRecyclableProduct = createAsyncThunk(
  'recyclableProducts/get',
  async (recyclableProductId, thunkAPI) => {
    try {
      return await recyclableProductService.getRecyclableProduct(recyclableProductId)
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

export const recyclableProductSlice = createSlice({
  name: 'recyclableProduct',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(getRecyclableProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRecyclableProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.recyclableProducts = action.payload
      })
      .addCase(getRecyclableProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.recyclableProducts = null
      })
     
      .addCase(getRecyclableProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRecyclableProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.recyclableProduct = action.payload
      })
      .addCase(getRecyclableProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.recyclableProduct = null
      })

  
  },
})

export const { reset } = recyclableProductSlice.actions
export default recyclableProductSlice.reducer