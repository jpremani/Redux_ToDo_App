import { configureStore } from "@reduxjs/toolkit";
import rootreducers from "./redux/reducers/Store";

const store = configureStore(rootreducers);
export default store;
