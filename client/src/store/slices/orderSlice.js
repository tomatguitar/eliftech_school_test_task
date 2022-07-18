import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    orderId: null
  },
  reducers: {
    getOrderNo: (state, action) => {
      state.orderId = action.payload.data.orderId;
    },
    replaceOrderData: (state) => {
      state.orders = [];
      state.orderId = null;
    },
    getPlacedOrders: (state, action) => {
      // console.log(current(state));
      state.orders = action.payload.data;
      // console.log(current(state));
    }
  }
});

export const { getOrderNo, getPlacedOrders, replaceOrderData } = cartSlice.actions;

export default cartSlice.reducer;
