import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPriceList = createAsyncThunk(
  "priceList/fetchPriceList",
  async () => {
    const response = await axios.get("https://404service/api/v1/services");
    return response.data;
  }
);

enum LoadingStatus {
  Pending = "pending",
  Fulfilled = "fulfilled",
  Rejected = "rejected",
}

type JSONData = Array<{
  category: string;
  service: Array<{ title: string; price: string }>;
}>;

interface PriceListState {
  priceList: JSONData;
  loading: "pending" | "fulfilled" | "rejected";
}

export const initialState: PriceListState = {
  priceList: [],
  loading: "pending",
};

export const priceListSlice = createSlice({
  name: "priceList",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPriceList.pending, (state) => {
        state.loading = LoadingStatus.Pending;
      })
      .addCase(
        fetchPriceList.fulfilled,
        (state, action: PayloadAction<JSONData>) => {
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
