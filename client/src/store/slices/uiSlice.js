import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    error: null,
    responseMessage: null,
    isFetching: false
  },
  reducers: {
    showAlert: (state, action) => {
      state.responseMessage = action.payload.data.responseMessage;
      // console.log(current(state));
    },
    showFetching: (state, action) => {
      state.isFetching = action.payload;
      // console.log(current(state));
    },
    showError: (state, action) => {
      state.error = {
        error: action.payload.error,
        message: action.payload.message
      };
    }
  }
});

export const { showError, showFetching, showAlert } = uiSlice.actions;

export default uiSlice.reducer;
