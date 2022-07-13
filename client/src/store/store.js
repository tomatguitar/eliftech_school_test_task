import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import shopReducer from './slices/shopSlice';
import uiReducer from './slices/uiSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
    ui: uiReducer
  }
});
