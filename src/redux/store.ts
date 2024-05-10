import { configureStore } from "@reduxjs/toolkit";

import priceListReducer from "./priceListSlicer/slicePriceList";
import statusReducer from "./statusSlicer/statusSlice";

export const store = configureStore({
  reducer: { priceList: priceListReducer, status: statusReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
