import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  message: "",
  isOpen: false,
};

const logicSlice = createSlice({
  name: "logic",
  initialState,
  reducers: {
    handleSubmit(state) {
      state.email = "";
      state.message = "";
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { handleSubmit, setEmail, setMessage, openModal, closeModal } =
  logicSlice.actions;
export default logicSlice.reducer;
