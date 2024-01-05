import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import issuesService from "./issues.service";

const initialState = {
  getIssuesbyEngine: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
};

// Setting user
export const getIssuesbyEngine = createAsyncThunk(
  "issues/issue",
  async ({ successCallBack }: any, thunkAPI: any) => {
    try {
      const response = await issuesService.getIssuesbyEngine();
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
export const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    reset: (state: any) => {
      state.getIssuesbyEngine = {
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
      .addCase(getIssuesbyEngine.pending, (state: any) => {
        state.getIssuesbyEngine.isLoading = true;
        state.getIssuesbyEngine.message = "";
        state.getIssuesbyEngine.isError = false;
        state.getIssuesbyEngine.isSuccess = false;
        state.getIssuesbyEngine.data = null;
      })
      .addCase(getIssuesbyEngine.fulfilled, (state: any, action: any) => {
        state.getIssuesbyEngine.isLoading = false;
        state.getIssuesbyEngine.isSuccess = true;
        state.getIssuesbyEngine.data = action.payload;
      })
      .addCase(getIssuesbyEngine.rejected, (state: any, action: any) => {
        state.getIssuesbyEngine.message = action.payload.message;
        state.getIssuesbyEngine.isLoading = false;
        state.getIssuesbyEngine.isError = true;
        state.getIssuesbyEngine.data = null;
      });
  },
});

export const { reset } = issuesSlice.actions;

export default issuesSlice.reducer;
