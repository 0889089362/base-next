import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import authReducer from "./features/auth-slice";
import loadingReducer from "./features/loading-slice";

export const store = configureStore({
  reducer: {
    authReducer,
    loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/* 
  example use:
  import { AppDispatch, useAppSelector } from "@/redux/store";
  const dispatch = useDispatch<AppDispatch>();
  const user = useAppSelector((state) => state.authReducer.value); get user data from the store
  dispatch(login()); get action 
*/
