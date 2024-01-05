import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "@/common/utils/users.util";
import authService from "./auth.service";

// Get user from localStorage
const user = getUser();
const initialState = {
  login: {
    data: user || null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  logout: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
};

interface ILoginRedux {
  payload: any;
  successCallBack: (data: any) => {};
  callBackMessage?: (data: any) => {};
}

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (
    { payload, successCallBack, callBackMessage }: ILoginRedux,
    thunkAPI: any
  ) => {
    try {
      const response = await authService.login(payload);
      if (response.Succeeded) {
        successCallBack(response.data);
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (payload: {}, thunkAPI: any) => {
    try {
      const response = await authService.logout();
      if (response.Succeeded) {
        return response;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state: any) => {
      state.login = {
        data: user || null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: "",
      };
      state.logout = {
        data: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: "",
      };
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(login.pending, (state: any) => {
        state.login.isLoading = true;
        state.login.message = "";
        state.login.isError = false;
        state.login.isSuccess = false;
        state.login.data = null;
      })
      .addCase(login.fulfilled, (state: any, action: any) => {
        state.login.isLoading = false;
        state.login.isSuccess = true;
        state.login.data = action.payload;
      })
      .addCase(login.rejected, (state: any, action: any) => {
        state.login.message = action.payload.message;
        state.login.isLoading = false;
        state.login.isError = true;
        state.login.data = null;
      })
      .addCase(logout.pending, (state: any) => {
        state.logout.isLoading = true;
        state.logout.message = "";
        state.logout.isError = false;
        state.logout.isSuccess = false;
        state.logout.data = null;
      })
      .addCase(logout.fulfilled, (state: any, action: any) => {
        state.logout.isLoading = false;
        state.logout.isSuccess = true;
        state.logout.data = action.payload;
      })
      .addCase(logout.rejected, (state: any, action: any) => {
        state.logout.message = action.payload.message;
        state.logout.isLoading = false;
        state.logout.isError = true;
        state.logout.data = null;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
