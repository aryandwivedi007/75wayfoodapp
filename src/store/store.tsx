
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './reducers/authReducer'
import partnerReducer from './reducers/partnerReducer'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    partner: partnerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
