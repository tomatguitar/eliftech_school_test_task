import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0
  },
  reducers: {
    replaceCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
    addItem: (state, action) => {
      const { items } = state;

      const itemInCartIndex = items.findIndex((item) => item.id === action.payload.id);

      const itemInCart = items[itemInCartIndex];

      if (itemInCart) {
        const updatedQuantity = itemInCart.quantity + 1;

        itemInCart.quantity = updatedQuantity;
        itemInCart.total = itemInCart.price * updatedQuantity;
      } else {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
          total: action.payload.price
        });
      }

      state.totalPrice += action.payload.price;
      state.totalQuantity += 1;

      // console.log(current(state));
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      const itemInCart = state.items[index];

      if (itemInCart.quantity <= 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        const updatedQuantity = itemInCart.quantity - 1;

        itemInCart.quantity = updatedQuantity;
        itemInCart.total = itemInCart.price * updatedQuantity;
      }

      state.totalPrice -= action.payload.price;
      state.totalQuantity -= 1;

      // console.log(current(state));
    }
  }
});

export const { showCart, addItem, removeItem, replaceCart } = cartSlice.actions;

export default cartSlice.reducer;
