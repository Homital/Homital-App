import { configureStore } from '@reduxjs/toolkit';
import AccountReducer from './accountSlice';

export default configureStore({
  reducer: {
    account: AccountReducer,
  },
});
