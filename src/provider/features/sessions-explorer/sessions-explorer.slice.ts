import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sessionsExplorer from "./sessions-explorer.service";

const initialState = {
  getActiveUser: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
};

// Setting user
export const getActiveUser = createAsyncThunk(
  "sessionsExplorer/getActiveUser",
  async ({ successCallBack }: any, thunkAPI: any) => {
    try {
      const response = await sessionsExplorer.getActiveUser();
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
export const sessionExploreSlice = createSlice({
  name: "sessionsExplorer",
  initialState,
  reducers: {
    reset: (state: any) => {
      state.getActiveUser = {
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
      .addCase(getActiveUser.pending, (state: any) => {
        state.getActiveUser.isLoading = true;
        state.getActiveUser.message = "";
        state.getActiveUser.isError = false;
        state.getActiveUser.isSuccess = false;
        state.getActiveUser.data = null;
      })
      .addCase(getActiveUser.fulfilled, (state: any, action: any) => {
        state.getActiveUser.isLoading = false;
        state.getActiveUser.isSuccess = true;
        state.getActiveUser.data = action.payload;
      })
      .addCase(getActiveUser.rejected, (state: any, action: any) => {
        state.getActiveUser.message = action.payload.message;
        state.getActiveUser.isLoading = false;
        state.getActiveUser.isError = true;
        state.getActiveUser.data = null;
      });
  },
});

export const { reset } = sessionExploreSlice.actions;

export default sessionExploreSlice.reducer;
