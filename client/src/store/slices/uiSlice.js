import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    showCart: false,
    error: null
  },
  reducers: {
    showError: (state, action) => {
      state.error = {
        error: action.payload.error,
        message: action.payload.message
      };
    }
  }
});

export const { showError } = uiSlice.actions;

export default uiSlice.reducer;
