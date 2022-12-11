import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import articleService from './articleService'

const initialState = {
  articles: [],
  article: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}



// Get all articles
export const getArticles = createAsyncThunk(
  'articles/getAll',
  async (_, thunkAPI) => {
    try {
      return await articleService.getArticles()
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
export const getArticle = createAsyncThunk(
  'articles/get',
  async (articleId, thunkAPI) => {
    try {
      return await articleService.getArticle(articleId)
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

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(getArticles.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.articles = action.payload
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.articles = null
      })
     
      .addCase(getArticle.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArticle.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.article = action.payload
      })
      .addCase(getArticle.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.article = null
      })

  
  },
})

export const { reset } = articleSlice.actions
export default articleSlice.reducer