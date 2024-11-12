import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  userName: string;
  image: string;
  phoneNumber: string;
  token: string;
}
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
