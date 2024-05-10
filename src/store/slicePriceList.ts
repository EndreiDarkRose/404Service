import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPriceList = createAsyncThunk(
  "priceList/fetchPriceList",
  async () => {
    const response = await axios.get(
      "https://663cb71917145c4d8c375f97.mockapi.io/pricelist"
    );
    return response.data;
  }
);

enum LoadingStatus {
  Pending = "pending",
  Fulfilled = "fulfilled",
  Rejected = "rejected",
}

export interface PriceListState {
  priceList: JSON[];
  loading: "pending" | "fulfilled" | "rejected";
}

const initialState: PriceListState = {
  priceList: [],
  loading: "pending",
};

export const priceListSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPriceList.pending, (state) => {
        state.loading = LoadingStatus.Pending;
      })
      .addCase(
        fetchPriceList.fulfilled,
        (state, action: PayloadAction<JSON[]>) => {
          state.loading = LoadingStatus.Fulfilled;
          state.priceList = action.payload;
        }
      )
      .addCase(fetchPriceList.rejected, (state) => {
        state.loading = LoadingStatus.Rejected;
      });
  },
});

export default priceListSlice.reducer;
