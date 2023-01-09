import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  role:""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    checkLogin: (state) => {
      const getToken = localStorage.getItem("token");
      if (getToken) {
        state.user = true;
      } else {
        state.user = false;
      }
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = false;
    },
    role: (state) => {
      const getRole = localStorage.getItem("role");
      state.role = getRole;
    }
    
  },
  extraReducers: {},
});

export const { login, logout, checkLogin, role } = userSlice.actions;

// export const selectUser = (state) => state.user;

export default userSlice.reducer;
