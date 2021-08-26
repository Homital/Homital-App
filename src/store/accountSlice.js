/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem } from '../utils/localstorage';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    refreshToken: getItem('refreshToken') ?? '',
    accessToken: '',
    username: getItem('username') ?? '',
  },
  reducers: {
    setRefreshToken: (state, action) => {
      const {
        token,
      } = action.payload;
      state.refreshToken = token;
      setItem('refreshToken', token);
    },
    setAccessToken: (state, action) => {
      const {
        token,
      } = action.payload;
      state.accessToken = token;
    },
    setUsername: (state, action) => {
      const {
        username,
      } = action.payload;
      state.username = username;
      setItem('username', username);
    },
    login: (state, action) => {
      const {
        username,
        refreshToken,
        accessToken,
      } = action.payload;
      state.username = username;
      state.refreshToken = refreshToken;
      state.accessToken = accessToken;
      setItem('username', username);
      setItem('refreshToken', refreshToken);
    },
    reset: (state) => {
      state.refreshToken = '';
      state.accessToken = '';
      state.username = '';
      setItem('refreshToken', '');
    },
  },
});

export const {
  setRefreshToken, setAccessToken, setUsername, login, reset,
} = accountSlice.actions;

export default accountSlice.reducer;
