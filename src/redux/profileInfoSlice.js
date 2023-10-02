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
  color: "#DEA527",
  links: [],
  direct: {
    status: 0,
    linkId: "",
  },
  formHeader: "",
  nameVisible: 0,
  emailVisible: 0,
  companyVisible: 0,
  jobVisible: 0,
  noteVisible: 0,
  phoneVisible: 0,
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
    setDirect: (state, action) => {
      state.direct = {
        status: action.payload?.status,
        linkId: action.payload?.linkId,
      };
    },

    setFormHeader: (state, action) => {
      state.formHeader = action.payload;
    },
    setNameVisible: (state, action) => {
      state.nameVisible = action.payload;
    },
    setEmailVisible: (state, action) => {
      state.emailVisible = action.payload;
    },
    setCompanyVisible: (state, action) => {
      state.companyVisible = action.payload;
    },
    setNoteVisible: (state, action) => {
      state.noteVisible = action.payload;
    },
    setJobVisible: (state, action) => {
      state.jobVisible = action.payload;
    },
    setPhoneVisible: (state, action) => {
      state.phoneVisible = action.payload;
    },
    setAllNull: (state) => {
      state.name = "";
      state.email = "";
      state.bio = "";
      state.address = "";
      state.designation = "";
      state.profileUrl = "";
      state.coverUrl = "";
      state.phone = "";
      state.color = "";
      state.links = "";
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
  setAllNull,
  setDirect,
  setFormHeader,
  setNameVisible,
  setEmailVisible,
  setCompanyVisible,
  setNoteVisible,
  setJobVisible,
  setPhoneVisible,
} = profileInfoSlice.actions;

export default profileInfoSlice.reducer;
