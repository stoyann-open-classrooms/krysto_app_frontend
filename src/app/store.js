import { configureStore } from '@reduxjs/toolkit';
import articleSlice from '../features/article/articleSlice';
import authReducer from '../features/auth/authSlice'

import messageSlice from '../features/message/messageSlice';
import partnerSlice from '../features/partner/partnerSlice';
import recyclableProductSlice from '../features/recyclableProduct/recyclableProductSlice'
import userSlice from '../features/user/userSlice';

import articleCategorySlice from '../features/articleCategory/articleCategorySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    article: articleSlice,
    recyclableProduct: recyclableProductSlice,
    partner: partnerSlice,
    profil: userSlice,
    message: messageSlice,
    articleCategories: articleCategorySlice
  },
});
