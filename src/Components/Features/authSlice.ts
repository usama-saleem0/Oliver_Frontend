// authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {User} from "../../types/user"

interface AuthState {
  isLoggedIn: boolean;
  currentUser: User | null; // Define User interface as per your application
}

const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
