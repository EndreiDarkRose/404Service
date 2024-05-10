import { configureStore } from "@reduxjs/toolkit";

import priceListReducer from "./slicePriceList";

export const store = configureStore({
  reducer: { priceList: priceListReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
