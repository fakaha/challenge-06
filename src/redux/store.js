import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

export default configureStore({
  reducer: rootReducers,
  devTools: import.meta.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Ini tidak diperlukan ketika fitur masih simple
});
