import { createSlice, current } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    error: null,
    isFetching: false
  },
  reducers: {
    showFetching: (state, action) => {
      state.isFetching = action.payload;
      console.log(current);
    },
    showError: (state, action) => {
      state.error = {
        error: action.payload.error,
        message: action.payload.message
      };
    }
  }
});

export const { showError, showFetching } = uiSlice.actions;

export default uiSlice.reducer;
