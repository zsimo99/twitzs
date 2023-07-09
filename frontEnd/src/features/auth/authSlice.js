import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = () => JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user() ? user() : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      console.log(error);
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      console.log(error);
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    return await authService.logout();
  } catch (error) {
    console.log(error);
    const message =
      (error.response && error.response.data && error.response.data.msg) ||
      error.message ||
      error.toString();
    return thunkApi.rejectWithValue(message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;
