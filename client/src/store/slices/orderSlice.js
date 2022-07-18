import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: []
  },
  reducers: {
    replaceOrderData: (state) => {
      state.orders = [];
    },
    getPlacedOrders: (state, action) => {
      // console.log(current(state));
      state.orders = action.payload.data;
      // console.log(current(state));
    }
  }
});

export const { getPlacedOrders, replaceOrderData } = cartSlice.actions;

export default cartSlice.reducer;
