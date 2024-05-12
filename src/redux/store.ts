import { configureStore } from "@reduxjs/toolkit";

import priceListReducer from "./priceListSlicer/slicePriceList";
import statusReducer from "./statusSlicer/statusSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { priceList: priceListReducer, status: statusReducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
