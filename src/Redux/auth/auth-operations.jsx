import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return Notify.failure('Please enter the correct info');
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return Notify.failure('Please enter the correct info');
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return Notify.failure('Something went wrong');
  }
});

const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  console.log(persistedToken);
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    console.error(error);
    return Notify.failure('Something went wrong');
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
  refresh,
};
export default authOperations;
