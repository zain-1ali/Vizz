import { configureStore } from "@reduxjs/toolkit";
import profileEditHandeler from "./editcardSlice";

export const store = configureStore({
  reducer: {
    profileEditHandeler: profileEditHandeler,
  },
});
