import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import articleCategoryService from './articleCategoryService'

const initialState = {
  articleCategories: [],
  articleCategory: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}



// Get all articles
export const getArticleCategories = createAsyncThunk(
  'articleCategories/getAll',
  async (_, thunkAPI) => {
    try {
      return await articleCategoryService.getArticleCategories()
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
export const getArticleCategory = createAsyncThunk(
  'articleCategories/get',
  async (articleCategoryId, thunkAPI) => {
    try {
      return await articleCategoryService.getArticleCategory(articleCategoryId)
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

export const articleCategorySlice = createSlice({
  name: 'articleCategory',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(getArticleCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArticleCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.articleCategories = action.payload
      })
      .addCase(getArticleCategories.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.articleCategories = null
      })
     
      .addCase(getArticleCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArticleCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.articleCategory = action.payload
      })
      .addCase(getArticleCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.articleCategory = null
      })

  
  },
})

export const { reset } = articleCategorySlice.actions
export default articleCategorySlice.reducer