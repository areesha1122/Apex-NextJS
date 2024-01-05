import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import enginesService from "./engines.service";

const initialState = {
  getEngine: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  updateEngine: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  singleEngine: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  deleteEngine: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
};

// Setting user
export const getEngine = createAsyncThunk(
  "engines/getEngine",
  async ({ successCallBack }: any, thunkAPI: any) => {
    try {
      const response = await enginesService.getEngine();
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

export const updateEngine = createAsyncThunk(
  "engines/updateEngine",
  async ({ payload, id, successCallBack }: any, thunkAPI: any) => {
    try {
      const response = await enginesService.updateEngine({ payload, id });
      if (response) {
        return response;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);
export const deleteEngine = createAsyncThunk(
  "engines/deleteEngine",
  async ({ id }: any, thunkAPI: any) => {
    try {
      const response = await enginesService.deleteEngine({ id });
      if (response) {
        return response;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

export const singleEngine = createAsyncThunk(
  "engines/singleEngine",
  async ({ id, successCallBack }: any, thunkAPI: any) => {
    try {
      const response = await enginesService.singleEngine(id);
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

export const enginesSlice = createSlice({
  name: "engines",
  initialState,
  reducers: {
    reset: (state: any) => {
      state.getEngine = {
        data: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: "",
      };
      state.singleEngine = {
        data: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: "",
      };
      state.updateEngine = {
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
      .addCase(getEngine.pending, (state: any) => {
        state.getEngine.isLoading = true;
        state.getEngine.message = "";
        state.getEngine.isError = false;
        state.getEngine.isSuccess = false;
        state.getEngine.data = null;
      })
      .addCase(getEngine.fulfilled, (state: any, action: any) => {
        state.getEngine.isLoading = false;
        state.getEngine.isSuccess = true;
        state.getEngine.data = action.payload;
      })
      .addCase(getEngine.rejected, (state: any, action: any) => {
        state.getEngine.message = action.payload.message;
        state.getEngine.isLoading = false;
        state.getEngine.isError = true;
        state.getEngine.data = null;
      })
      .addCase(singleEngine.pending, (state: any) => {
        state.singleEngine.isLoading = true;
        state.singleEngine.message = "";
        state.singleEngine.isError = false;
        state.singleEngine.isSuccess = false;
        state.singleEngine.data = null;
      })
      .addCase(singleEngine.fulfilled, (state: any, action: any) => {
        state.singleEngine.isLoading = false;
        state.singleEngine.isSuccess = true;
        state.singleEngine.data = action.payload;
      })
      .addCase(singleEngine.rejected, (state: any, action: any) => {
        state.singleEngine.message = action.payload.message;
        state.singleEngine.isLoading = false;
        state.singleEngine.isError = true;
        state.singleEngine.data = null;
      })
      .addCase(updateEngine.pending, (state: any) => {
        state.updateEngine.isLoading = true;
        state.updateEngine.message = "";
        state.updateEngine.isError = false;
        state.updateEngine.isSuccess = false;
        state.updateEngine.data = null;
      })
      .addCase(updateEngine.fulfilled, (state: any, action: any) => {
        state.updateEngine.isLoading = false;
        state.updateEngine.isSuccess = true;
        state.updateEngine.data = action.payload;
      })
      .addCase(updateEngine.rejected, (state: any, action: any) => {
        state.updateEngine.message = action.payload.message;
        state.updateEngine.isLoading = false;
        state.updateEngine.isError = true;
        state.updateEngine.data = null;
      });
  },
});

export const { reset } = enginesSlice.actions;

export default enginesSlice.reducer;
