import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { rootReducer } from "./counter";

export default configureStore({
  reducer: {
    counter: rootReducer,
    sectionHeading: rootReducer,
    // counter: counterReducer,
  },
});
