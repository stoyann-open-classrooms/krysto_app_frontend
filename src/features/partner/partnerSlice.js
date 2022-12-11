import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import partnerService from './partnerService'

const initialState = {
  partners: [],
  partner: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}



// Get all partners
export const getPartners = createAsyncThunk(
  'partners/getAll',
  async (_, thunkAPI) => {
    try {
      return await partnerService.getPartners()
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
export const getPartner = createAsyncThunk(
  'partners/get',
  async (partnerId, thunkAPI) => {
    try {
      return await partnerService.getPartner(partnerId)
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

export const partnerSlice = createSlice({
  name: 'partner',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(getPartners.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPartners.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.partners = action.payload
      })
      .addCase(getPartners.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.partners = null
      })
     
      .addCase(getPartner.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPartner.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.partner = action.payload
      })
      .addCase(getPartner.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.partner = null
      })

  
  },
})

export const { reset } = partnerSlice.actions
export default partnerSlice.reducer