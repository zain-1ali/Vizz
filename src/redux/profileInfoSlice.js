import { createSlice } from "@reduxjs/toolkit";
import bgplaceholder from "../imgs/coverholder.png";
import prflplaceholder from "../imgs/prflplaceholder.png";
const initialState = {
  name: "",
  email: "",
  bio: "",
  address: "",
  designation: "",
  profileUrl: prflplaceholder,
  logoUrl: "",
  coverUrl: bgplaceholder,
  phone: "",
  color: "",
  links: [],
};

export const profileInfoSlice = createSlice({
  name: "profileInfoSlice",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setBio: (state, action) => {
      state.bio = action.payload;
    },

    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setDesignation: (state, action) => {
      state.designation = action.payload;
    },
    setProfileurl: (state, action) => {
      state.profileUrl = action.payload;
    },
    setCoverUrl: (state, action) => {
      state.coverUrl = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setLinks: (state, action) => {
      state.links = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setName,
  setEmail,
  setColor,
  setPhone,
  setCoverUrl,
  setProfileurl,
  setDesignation,
  setAddress,
  setBio,
  setLinks,
} = profileInfoSlice.actions;

export default profileInfoSlice.reducer;
