import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import shopReducer from './slices/shopSlice';
import orderReducer from './slices/orderSlice';
import uiReducer from './slices/uiSlice';

export default configureStore({
  reducer: {
    orders: orderReducer,
    cart: cartReducer,
    shop: shopReducer,
    ui: uiReducer
  }
});
