import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let baseUrl = import.meta.env.VITE_BASE_URL;
// create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://64e1f4bfab00373588188910.mockapi.io/crud",
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// login action
export const loginUser = createAsyncThunk(
  "loginUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/login`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data.thedata),
    });
    try {
      const result = await response.json();
      localStorage.setItem("vizzToken", result?.data?.token);
      data.successNavigation();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
let theToken = localStorage.getItem("vizzToken")?.split("|");

export const signOutUser = createAsyncThunk(
  "signOutUser",
  async (cb, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/signout`, {
      method: "Post",
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
      },
    });
    try {
      const result = await response.json();
      cb();
      localStorage.removeItem("vizzToken");
      // data.successNavigation();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// read action
export const getOrganizationProfiles = createAsyncThunk(
  "getOrganizationProfiles",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getOrganizationProfiles`, {
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
      },
    });
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getEmployee = createAsyncThunk(
  "getEmployee",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getEmployee/${id}`, {
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
      },
    });

    try {
      const result = await response.json();
      // dispatch(setName(result?.data?.name));
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getAllSocialLinks = createAsyncThunk(
  "getAllSocialLinks",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getAllLinks`, {
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
      },
    });

    try {
      const result = await response.json();
      // dispatch(setName(result?.data?.name));
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// create action
export const submitAbout = createAsyncThunk(
  "submitAbout",

  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/updateEmployee`, {
      method: "Post",
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      console.log("res");
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// Apis for organization links
//
export const addOrganizationLink = createAsyncThunk(
  "addOrganizationLink",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/addOrganizationLink`, {
      method: "Post",
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data?.data),
    });
    try {
      const result = await response.json();
      data?.func();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getOrganizationLinks = createAsyncThunk(
  "getOrganizationLinks",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getOrganizationLinks`, {
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
      },
    });

    try {
      const result = await response.json();
      // dispatch(setName(result?.data?.name));
      console.log("org links");
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteOrganizationLink = createAsyncThunk(
  "deleteOrganizationLink",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/deleteOrganizationLink`, {
      method: "Post",
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });

    try {
      const result = await response.json();
      // dispatch(setName(result?.data?.name));
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const rearrangeLinks = createAsyncThunk(
  "rearrangeLinks",

  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/arrangeOrganizationLinks`, {
      method: "Post",
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ links: data }),
    });
    try {
      const result = await response.json();
      console.log("org");
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// Apis for user links

export const addUserLink = createAsyncThunk(
  "addUserLink",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/addUserLink`, {
      method: "Post",
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data?.data),
    });
    try {
      const result = await response.json();
      data?.func();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getUserLinks = createAsyncThunk(
  "getUserLinks",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getUserLinks/${id}`, {
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
      },
    });

    try {
      const result = await response.json();
      console.log("user links");
      // dispatch(setName(result?.data?.name));
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteUserLink = createAsyncThunk(
  "deleteUserLink",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/deleteUserLink`, {
      method: "Post",
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });

    try {
      const result = await response.json();
      // dispatch(setName(result?.data?.name));
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const rearrangeUserLinks = createAsyncThunk(
  "rearrangeUserLinks",

  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/arrangeUserLinks`, {
      method: "Post",
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        links: data.updatedLinksIds,
        userId: data.userId,
      }),
    });
    try {
      const result = await response.json();
      console.log("user");
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getOrganization = createAsyncThunk(
  "getOrganization",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getOrganization`, {
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
      },
    });
    console.log("org1");
    try {
      const result = await response.json();
      // dispatch(setName(result?.data?.name));
      console.log("org2");
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const addEmployee = createAsyncThunk(
  "addEmployee",

  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/createEmployee`, {
      method: "Post",
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      console.log("res");
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const updateOrganization = createAsyncThunk(
  "updateOrganization",

  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/updateOrganization`, {
      method: "Post",
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      console.log("res");
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  response: {},
  profiles: {},
  allLinks: {},
  singleEmployee: {},
  addedLinks: {},
  organization: {},
  loading: false,
  submitLoading: false,
  error: null,
};

export const ApiSlice = createSlice({
  name: "ApiSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },

    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },

    // Login method
    // (
    [loginUser.pending]: (state) => {
      state.submitLoading = true;
    },

    [loginUser.fulfilled]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // get organization profile
    // (
    [getOrganizationProfiles.pending]: (state) => {
      state.loading = true;
    },

    [getOrganizationProfiles.fulfilled]: (state, action) => {
      state.loading = false;
      state.profiles = action.payload;
    },
    [getOrganizationProfiles.rejected]: (state, action) => {
      state.loading = false;
      state.profiles = action.payload;
    },
    // )
    // get single employee
    // (
    [getEmployee.pending]: (state) => {
      state.loading = true;
    },

    [getEmployee.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleEmployee = action.payload;
    },
    [getEmployee.rejected]: (state, action) => {
      state.loading = false;
      state.singleEmployee = action.payload;
    },
    // )

    // getAllSocialLinks
    // (
    [getAllSocialLinks.pending]: (state) => {
      state.loading = true;
    },

    [getAllSocialLinks.fulfilled]: (state, action) => {
      state.loading = false;
      state.allLinks = action.payload;
    },
    [getAllSocialLinks.rejected]: (state, action) => {
      state.loading = false;
      state.allLinks = action.payload;
    },
    // )
    // update about method
    // (
    [submitAbout.pending]: (state) => {
      // toast.loading("Please wait...");
      state.submitLoading = true;
    },

    [submitAbout.fulfilled]: (state, action) => {
      action.payload.status === true
        ? toast.success(action.payload.message)
        : toast.error(action.payload.message);

      state.submitLoading = false;
      state.response = action.payload;
    },
    [submitAbout.rejected]: (state, action) => {
      toast.error(action.payload.message);
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // add Organization Link
    // (
    [addOrganizationLink.pending]: (state) => {
      state.submitLoading = true;
    },

    [addOrganizationLink.fulfilled]: (state, action) => {
      action.payload.status === true
        ? toast.success(action.payload.message)
        : toast.error(action.payload.message);
      state.submitLoading = false;
      state.response = action.payload;
    },
    [addOrganizationLink.rejected]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // get added Organization Links

    // (
    [getOrganizationLinks.pending]: (state) => {
      state.loading = true;
    },

    [getOrganizationLinks.fulfilled]: (state, action) => {
      state.loading = false;
      state.addedLinks = action.payload;
    },
    [getOrganizationLinks.rejected]: (state, action) => {
      state.loading = false;
      state.addedLinks = action.payload;
    },
    // )

    // delete Organization Link
    // (
    [deleteOrganizationLink.pending]: (state) => {
      state.submitLoading = true;
    },

    [deleteOrganizationLink.fulfilled]: (state, action) => {
      action.payload.status === true
        ? toast.success(action.payload.message)
        : toast.error(action.payload.message);
      state.submitLoading = false;
      state.response = action.payload;
    },
    [deleteOrganizationLink.rejected]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // rearrange Links
    // (
    [rearrangeLinks.pending]: (state) => {
      state.submitLoading = true;
    },

    [rearrangeLinks.fulfilled]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    [rearrangeLinks.rejected]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // add User Link
    // (
    [addUserLink.pending]: (state) => {
      state.submitLoading = true;
    },

    [addUserLink.fulfilled]: (state, action) => {
      state.submitLoading = false;
      state.addedLinks = action.payload;
    },
    [addUserLink.rejected]: (state, action) => {
      state.submitLoading = false;
      state.addedLinks = action.payload;
    },
    // )

    // get User Links
    // (
    [getUserLinks.pending]: (state) => {
      state.submitLoading = true;
    },

    [getUserLinks.fulfilled]: (state, action) => {
      state.submitLoading = false;
      state.addedLinks = action.payload;
    },
    [getUserLinks.rejected]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // delete User Link
    // (
    [deleteUserLink.pending]: (state) => {
      state.submitLoading = true;
    },

    [deleteUserLink.fulfilled]: (state, action) => {
      action.payload.status === true
        ? toast.success(action.payload.message)
        : toast.error(action.payload.message);
      state.submitLoading = false;
      state.response = action.payload;
      console.log(action?.payload?.data);
      // state.addedLinks = action?.payload?.data;
    },
    [deleteUserLink.rejected]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // rearrange User Links
    // (
    [rearrangeUserLinks.pending]: (state) => {
      state.loading = true;
    },

    [rearrangeUserLinks.fulfilled]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    [rearrangeUserLinks.rejected]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // get Organization

    // (
    [getOrganization.pending]: (state) => {
      state.loading = true;
    },

    [getOrganization.fulfilled]: (state, action) => {
      state.loading = false;
      state.organization = action.payload;
    },
    [getOrganization.rejected]: (state, action) => {
      state.loading = false;
      state.organization = action.payload;
    },
    // )

    // update Organization method
    // (
    [updateOrganization.pending]: (state) => {
      // toast.loading("Please wait...");
      state.submitLoading = true;
    },

    [updateOrganization.fulfilled]: (state, action) => {
      action.payload.status === true
        ? toast.success(action.payload.message)
        : toast.error(action.payload.message);

      state.submitLoading = false;
      state.response = action.payload;
    },
    [updateOrganization.rejected]: (state, action) => {
      toast.error(action.payload.message);
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // update Organization method
    // (
    [addEmployee.pending]: (state) => {
      // toast.loading("Please wait...");
      state.submitLoading = true;
    },

    [addEmployee.fulfilled]: (state, action) => {
      action.payload.status === true
        ? toast.success(action.payload.message)
        : toast.error(action.payload.message);

      state.submitLoading = false;
      state.response = action.payload;
    },
    [addEmployee.rejected]: (state, action) => {
      toast.error(action.payload.message);
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )
  },
});

export default ApiSlice.reducer;
