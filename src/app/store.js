import { configureStore } from '@reduxjs/toolkit';
import articleSlice from '../features/article/articleSlice';
import authReducer from '../features/auth/authSlice'
import partnerSlice from '../features/partner/partnerSlice';
import recyclableProductSlice from '../features/recyclableProduct/recyclableProductSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    article: articleSlice,
    recyclableProduct: recyclableProductSlice,
    partner: partnerSlice
  },
});
