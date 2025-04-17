import { GlobalError, UserProfile, ValidationError } from '@/types/userTypes';
import { createSlice } from '@reduxjs/toolkit';
import { login, register } from '@/redux/thunks/userThunks';

interface UserState {
  user: UserProfile | null;
  loginLoading: boolean;
  loginError: GlobalError | null;
  registerLoading: boolean;
  registerError: ValidationError | null;
}

const initialState: UserState = {
  user: null,
  loginLoading: false,
  loginError: null,
  registerLoading: false,
  registerError: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    unsetUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(login.pending, (state) => {
      state.loginLoading = true;
    }).addCase(login.fulfilled, (state, {payload: user}) => {
      state.user = user;
      state.loginLoading = false;
    }).addCase(login.rejected, (state, {payload: error}) => {
      state.loginLoading = false;
      state.loginError = error || null;
    });
    builder.addCase(register.pending, (state) => {
      state.registerLoading = true;
    }).addCase(register.fulfilled, (state, {payload: user}) => {
      state.user = user;
      state.registerLoading = false;
    }).addCase(register.rejected, (state, {payload: error}) => {
      state.registerLoading = false;
      state.registerError = error || null;
    })
  },
  selectors: {
    selectUser: state => state.user,
    selectLoginLoading: state => state.loginLoading,
    selectRegisterLoading: state => state.registerLoading,
    selectRegisterError: state => state.registerError,
  },
});

export const usersReducer = userSlice.reducer;

export const {unsetUser} = userSlice.actions;

export const {
  selectUser,
  selectRegisterError,
  selectLoginLoading,
  selectRegisterLoading,
} = userSlice.selectors;
