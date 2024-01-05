import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./features/auth/auth.slice";
import enginesReducer from "./features/engines/engines.slice";
import policiesReducer from "./features/policies/policies.slice";
import dashboardReducer from "./features/dashboard/dashbaord.slice";
import sessionsExplorerReducer from "./features/sessions-explorer/sessions-explorer.slice";
import issuesReducer from "./features/Issues/issues.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    engines: enginesReducer,
    policies: policiesReducer,
    dashboard: dashboardReducer,
    sessionsExplorer: sessionsExplorerReducer,
    issues: issuesReducer,
  },
});
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;

export default store;
