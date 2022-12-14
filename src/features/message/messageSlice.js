import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import messageService from './messageService'

const initialState = {
  messages: [],
  messag: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


// create message
export const createMessage = createAsyncThunk(
  'messages/create',
  async (messageData, thunkAPI) => {
    console.log(messageData)
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await messageService.createMessage(messageData)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

// Get all articles
export const getMessages = createAsyncThunk(
  'messages/getAll',
  async (_, thunkAPI) => {
    try {
      return await messageService.getMessages()
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
export const getMessage = createAsyncThunk(
  'messag/get',
  async (messageId, thunkAPI) => {
    try {
      return await messageService.getMessage(messageId)
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

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(getMessages.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.messages = action.payload
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.messages = null
      })
     
      .addCase(getMessage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.messag = action.payload
      })
      .addCase(getMessage.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.messag = action.payload
      })
      .addCase(createMessage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createMessage.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createMessage.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.messag = action.payload
  
      })

  
  },
})

export const { reset } = messageSlice.actions
export default messageSlice.reducer