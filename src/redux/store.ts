import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import userReducer from "./Slices/UserSlice";
import popUpReducer from "./Slices/PopUpSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    popUp: popUpReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
