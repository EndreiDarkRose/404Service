import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStatus = createAsyncThunk(
  "status/fetchStatus",
  async (queryStatus: string) => {
    const response = await axios.post(
      "http://127.0.0.1:3000/api/v1/orders/search",
      queryStatus
    );
    return response.data;
  }
);
enum LoadingStatus {
  Pending = "pending",
  Fulfilled = "fulfilled",
  Rejected = "rejected",
}

interface PriceListState {
  status: { status: string };
  loading: "fulfilled" | "rejected";
}

const initialState: PriceListState = {
  status: { status: "" },
  loading: "fulfilled",
};

export const statusSlice = createSlice({
  name: "statusMessage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatus.fulfilled, (state, action) => {
        state.status = action.payload;
        state.loading = LoadingStatus.Fulfilled;
      })
      .addCase(fetchStatus.rejected, (state) => {
        state.loading = LoadingStatus.Rejected;
      });
  },
});

export default statusSlice.reducer;
