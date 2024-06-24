import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const sectionHeadingSlice = createSlice({
  name: "sectionHeading",
  initialState: {
    sectionName: "",
  },
  reducers: {
    headerName: (state, action) => {
      state.sectionName = action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export default counterSlice.reducer;

export const { headerName } = sectionHeadingSlice.actions;
// export default sectionHeadingSlice.reducer;

// Combine reducers
export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  sectionHeading: sectionHeadingSlice.reducer,
});
