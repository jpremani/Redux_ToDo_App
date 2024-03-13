import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    delete1(state, action) {
      return state.filter((ele, k) => k !== action.payload);
    },
    update1(state, action) {
      return state.map((value, index) =>
        index === action.payload.index ? action.payload.value : value
      );
    },
  },
});
export default todoSlice.reducer;
// export const { add, Update_data, delete} = todoSlice.actions;
export const { add, delete1, update1 } = todoSlice.actions;
