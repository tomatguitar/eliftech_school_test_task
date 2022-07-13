import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'shop',
  initialState: {
    shopProducts: []
  },
  reducers: {
    getShopProducts: (state, action) => {
      console.log(current(state));
      state.shopProducts = action.payload.data.products;
      console.log(current(state));
    }
  }
});

export const { getShopProducts } = cartSlice.actions;

export default cartSlice.reducer;
