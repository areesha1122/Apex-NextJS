import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import policiesService from "./policies.service";

const initialState = {
  getPolicies: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
};

// Setting user
export const getPolicies = createAsyncThunk(
  "policies/policy",
  async ({ successCallBack }: any, thunkAPI: any) => {
    try {
      const response = await policiesService.getPolicies();
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

export const policiesSlice = createSlice({
  name: "policy",
  initialState,
  reducers: {
    reset: (state: any) => {
      state.getPolicies = {
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
      .addCase(getPolicies.pending, (state: any) => {
        state.getPolicies.isLoading = true;
        state.getPolicies.message = "";
        state.getPolicies.isError = false;
        state.getPolicies.isSuccess = false;
        state.getPolicies.data = null;
      })
      .addCase(getPolicies.fulfilled, (state: any, action: any) => {
        state.getPolicies.isLoading = false;
        state.getPolicies.isSuccess = true;
        state.getPolicies.data = action.payload;
      })
      .addCase(getPolicies.rejected, (state: any, action: any) => {
        state.getPolicies.message = action.payload.message;
        state.getPolicies.isLoading = false;
        state.getPolicies.isError = true;
        state.getPolicies.data = null;
      });
  },
});

export const { reset } = policiesSlice.actions;

export default policiesSlice.reducer;
