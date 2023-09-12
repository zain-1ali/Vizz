import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  linkmodal: false,
  linkeditmodal: false,
  linkupdateModal: false,
  CustomModal: false,
};

export const modalSlice = createSlice({
  name: "modalHandeler",
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = true;
      state.linkmodal = true;
    },
    openCustomModal: (state) => {
      state.CustomModal = true;
    },
    closeCustomModal: (state) => {
      state.CustomModal = false;
    },
    openLinkModal: (state) => {
      state.linkmodal = true;
      state.linkeditmodal = false;
      state.linkupdateModal = false;
    },
    openLinkEditModal: (state) => {
      console.log("test");
      state.linkmodal = false;
      state.linkeditmodal = true;
      // state.linkupdateModal = false;
    },
    openLinkUpdateModal: (state) => {
      state.linkmodal = false;
      state.linkeditmodal = false;
      state.linkupdateModal = true;
    },
    closeAllModal: (state) => {
      state.modal = false;
      state.linkmodal = false;
      state.linkeditmodal = false;
      state.linkupdateModal = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openLinkModal,
  openLinkEditModal,
  openLinkUpdateModal,
  openModal,
  closeAllModal,
  openCustomModal,
  closeCustomModal,
} = modalSlice.actions;

export default modalSlice.reducer;
