import { configureStore } from "@reduxjs/toolkit";

import logicReducer from "./features/LogicSlice";


const store = configureStore({
  reducer: {
    logic: logicReducer,
  },
});

export default store;
