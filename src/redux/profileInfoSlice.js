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
  qrLogo: "",
  qrColor: "black",
  textColor: "black",
  btnColor: "black",
  linkBgColor: "black",
  linkColor: "white",
  poweredVizz: 1,
  leadMode: 0,
  organizationLogo: "",
  orgColor: "#DEA527",
  orgTextColor: "black",
  orgBtnColor: "black",
  orgLinkBgColor: "black",
  orgLinkColor: "white",

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
    setQrLogo: (state, action) => {
      state.qrLogo = action.payload;
    },
    setQrColor: (state, action) => {
      state.qrColor = action.payload;
    },
    setTextColor: (state, action) => {
      state.textColor = action.payload;
    },
    setbtnColor: (state, action) => {
      state.btnColor = action.payload;
    },
    setlinkBgColor: (state, action) => {
      state.linkBgColor = action.payload;
    },
    setlinkColor: (state, action) => {
      state.linkColor = action.payload;
    },

    // ------------------------------------org clrs methods---------------------------------------

    setOrgTextColor: (state, action) => {
      state.orgTextColor = action.payload;
    },
    setOrgbtnColor: (state, action) => {
      state.orgBtnColor = action.payload;
    },
    setOrglinkBgColor: (state, action) => {
      state.orgLinkBgColor = action.payload;
    },
    setOrglinkColor: (state, action) => {
      state.orgLinkColor = action.payload;
    },
    setOrgColor: (state, action) => {
      state.orgColor = action.payload;
    },

    // ----------------------------------------------------

    setLead: (state, action) => {
      state.leadMode = action.payload;
    },
    setPoweredVizz: (state, action) => {
      state.poweredVizz = action.payload;
    },
    setOrgLogo: (state, action) => {
      state.organizationLogo = action.payload;
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
  setQrColor,
  setQrLogo,
  setLead,
  setOrgLogo,
  setPoweredVizz,
  setTextColor,
  setbtnColor,
  setlinkColor,
  setlinkBgColor,
  setOrgColor,
  setOrglinkColor,
  setOrglinkBgColor,
  setOrgbtnColor,
  setOrgTextColor,
} = profileInfoSlice.actions;

export default profileInfoSlice.reducer;
