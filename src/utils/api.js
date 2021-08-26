import axios from 'axios';

import store from '../store';

const API_BASE_URL = 'https://homital.herokuapp.com/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

if (store.getState().account.accessToken) {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${store.getState().account.accessToken}`;
}

function listener() {
  const { accessToken } = store.getState().account;
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

store.subscribe(listener);

export async function getOtp({ email }) {
  const response = await axiosInstance.post('/auth/user/getotp', {
    email,
  });
  return response.data;
}

export async function register({
  email, username, password, otp,
}) {
  const response = await axiosInstance.post('/auth/user/register', {
    email,
    username,
    password,
    otp,
  });
  return response.data;
}

export async function login({
  email, username, password,
}) {
  const response = await axiosInstance.post(`/auth/user/login?by=${username ? 'username' : 'email'}`, {
    email,
    username,
    password,
  });
  return response.data;
}

export async function getAccessToken({ token }) {
  const response = await axiosInstance.post('/auth/user/token', {
    refresh_token: token,
  });
  return response.data;
}

export async function logout({ token }) {
  const response = await axiosInstance.post('/auth/user/logout', {
    refresh_token: token,
  });
  return response.data;
}

export async function resetPassword({
  email, otp,
}) {
  const response = await axiosInstance.post('/auth/user/fgtpswd', {
    email,
    otp,
  });
  return response.data;
}

export async function updatePassword({
  email, oldPassword, newPassword,
}) {
  const response = await axiosInstance.post('/auth/user/updatepswd', {
    email,
    old_password: oldPassword,
    new_password: newPassword,
  });
  return response.data;
}
