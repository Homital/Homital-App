/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem } from '../utils/localstorage';

export const accountSlice = createSlice({
  name: 'account',
  initialState: getItem('account') ?? {
    token: '',
  },
  reducers: {
    setToken: (state, action) => {
      const {
        token,
      } = action.payload;
      state.token = token;
      setItem('account', state);
    },
    resetToken: (state) => {
      state.token = '';
      setItem('account', state);
    },
  },
});

export const { setToken, resetToken } = accountSlice.actions;

export default accountSlice.reducer;
