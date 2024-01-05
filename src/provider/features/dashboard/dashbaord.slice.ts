import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dashboardService from "./dashboard.service";

const initialState = {
  getActiveEngine: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
};

// Setting user
export const getActiveEngine = createAsyncThunk(
  "Dashbaord/getActiveEngine",
  async ({ successCallBack }: any, thunkAPI: any) => {
    try {
      const response = await dashboardService.getActiveEngine();
      if (response) {
        successCallBack(response);
        return response;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    reset: (state: any) => {
      state.getActiveEngine = {
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
      .addCase(getActiveEngine.pending, (state: any) => {
        state.getActiveEngine.isLoading = true;
        state.getActiveEngine.message = "";
        state.getActiveEngine.isError = false;
        state.getActiveEngine.isSuccess = false;
        state.getActiveEngine.data = null;
      })
      .addCase(getActiveEngine.fulfilled, (state: any, action: any) => {
        state.getActiveEngine.isLoading = false;
        state.getActiveEngine.isSuccess = true;
        state.getActiveEngine.data = action.payload;
      })
      .addCase(getActiveEngine.rejected, (state: any, action: any) => {
        state.getActiveEngine.message = action.payload.message;
        state.getActiveEngine.isLoading = false;
        state.getActiveEngine.isError = true;
        state.getActiveEngine.data = null;
      });
  },
});

export const { reset } = dashboardSlice.actions;

export default dashboardSlice.reducer;
