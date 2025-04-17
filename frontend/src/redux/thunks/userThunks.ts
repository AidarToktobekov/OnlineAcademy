import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios'
import { UserLogin, UserProfile, GlobalError, UserMutation, ValidationError } from '@/types/userTypes';
import axiosApi from '@/axiosApi';

export const login = createAsyncThunk<
  UserProfile,
  UserLogin,
  {rejectValue: GlobalError}
>("user/login", async (loginMutation, {rejectWithValue})=>{
  try {
    const {data: user} = await axiosApi.post<UserProfile>("/users/sessions", loginMutation);

    return user;
  }catch (e){
    if (isAxiosError(e) && e.response && e.response.status === 400) {
      return rejectWithValue(e.response.data);
    }
    throw e;
  }
});

export const register = createAsyncThunk<
  UserProfile,
  UserMutation,
  {rejectValue: ValidationError}
>("user/register", async (registerMutation, {rejectWithValue})=>{
  try {
    const {data: user} = await axiosApi.post<UserProfile>("/users", registerMutation);

    return user;
  }catch (e){
    if (isAxiosError(e) && e.response && e.response.status === 400) {
      return rejectWithValue(e.response.data);
    }
    throw e;
  }
});