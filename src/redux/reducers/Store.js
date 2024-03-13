import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
const store = configureStore({
  reducer: {
    tododata: todoSlice,
  },
});
export default store;
