import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
let theToken = localStorage.getItem("vizzToken").split("|");

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
    console.log(data.get("name"));
    id = data.get("id");
    const response = await fetch(`${baseUrl}/api/updateEmployee`, {
      method: "Post",
      body: data,
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
        "Content-Type": "multipart/form-data",
      },
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

      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
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
      console.log(result);
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
      state.submitLoading = true;
    },

    [submitAbout.fulfilled]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    [submitAbout.rejected]: (state, action) => {
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
      state.submitLoading = false;
      state.response = action.payload;
    },
    [addOrganizationLink.rejected]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // get Organization Links

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
  },
});

export default ApiSlice.reducer;
