import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let baseUrl = import.meta.env.VITE_BASE_URL;

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
      localStorage.setItem("vizzRole", result?.data?.role);
      console.log(result);
      if (result?.status === true) {
        data.successNavigation();
      }

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
      console.log("res", result);
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

// other ------------------------------
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

export const updateEmployeeDirect = createAsyncThunk(
  "updateEmployeeDirect",

  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/changeUserDirect`, {
      method: "Post",
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      // console.log("res");
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const updateLead = createAsyncThunk(
  "updateLead",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/updateLeadFields`, {
      method: "Post",
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      // console.log("res");
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getAllLeads = createAsyncThunk(
  "getAllLeads",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getAllLeads`, {
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
      },
    });
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getAnalytics = createAsyncThunk(
  "getAnalytics",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getAnalytics`, {
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

export const getEmpNames = createAsyncThunk(
  "getEmpNames",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getEmpNames`, {
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
      },
    });
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getSingleLeadContacts = createAsyncThunk(
  "getSingleLeadContacts",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getLeadContacts/${id}`, {
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
      },
    });
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteLead = createAsyncThunk(
  "deleteLead",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/deleteLead/${id}`, {
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
      },
    });
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "deleteEmployee",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/deleteEmployee/${id}`, {
      headers: {
        Authorization: `Bearer ${theToken[1]}`,
      },
    });
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// -------------------------------------------------->(Super Admin apis)<----------------------------------------

export const getallOrganization = createAsyncThunk(
  "getallOrganization",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getallOrganization`, {
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

export const addOrganization = createAsyncThunk(
  "addOrganization",

  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/createOrganization`, {
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

export const adminAccess = createAsyncThunk(
  "adminAccess",

  async (data, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/adminAccess`, {
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
  profiles: { data: { employees: [] } },
  allLinks: {},
  singleEmployee: {},
  addedLinks: {},
  organization: {},
  loading: false,
  profilesLoading: false,
  submitLoading: false,
  error: null,
  leadsLoading: false,
  leads: {},
  employeeList: {},
  analyticsData: {},
  analyticsLoading: false,
};

export const ApiSlice = createSlice({
  name: "ApiSlice",
  initialState,
  reducers: {},
  extraReducers: {
    // [createUser.pending]: (state) => {
    //   state.loading = true;
    // },

    // [createUser.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.users.push(action.payload);
    // },
    // [createUser.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.users = action.payload;
    // },

    // Login method
    // (
    [loginUser.pending]: (state) => {
      state.submitLoading = true;
    },

    [loginUser.fulfilled]: (state, action) => {
      action.payload.status === true
        ? toast.success(action.payload.message)
        : toast.error(action.payload.message);
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
      state.profilesLoading = true;
    },

    [getOrganizationProfiles.fulfilled]: (state, action) => {
      state.profilesLoading = false;
      state.profiles = action.payload;
    },
    [getOrganizationProfiles.rejected]: (state, action) => {
      state.profilesLoading = false;
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
      state.addedLinks = action?.payload;
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
      state.addedLinks = action?.payload;
    },
    [deleteOrganizationLink.rejected]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // rearrange Links
    // (
    [rearrangeLinks.pending]: (state) => {
      // state.submitLoading = true;
    },

    [rearrangeLinks.fulfilled]: (state, action) => {
      // state.submitLoading = false;
      state.response = action.payload;
    },
    [rearrangeLinks.rejected]: (state, action) => {
      // state.submitLoading = false;
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
      state.addedLinks = action?.payload;
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
      state.addedLinks = action?.payload;
    },
    [deleteUserLink.rejected]: (state, action) => {
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // rearrange User Links
    // (
    [rearrangeUserLinks.pending]: (state) => {
      // state.loading = true;
    },

    [rearrangeUserLinks.fulfilled]: (state, action) => {
      // state.submitLoading = false;
      state.response = action.payload;
    },
    [rearrangeUserLinks.rejected]: (state, action) => {
      // state.submitLoading = false;
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

    // update Employee Direct

    // (
    [updateEmployeeDirect.pending]: (state) => {
      // state.loading = true;
    },

    [updateEmployeeDirect.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [updateEmployeeDirect.rejected]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
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

    // update Employee Direct

    // (
    [updateLead.pending]: (state) => {
      state.submitLoading = true;
    },

    [updateLead.fulfilled]: (state, action) => {
      action.payload.status === true
        ? toast.success(action.payload.message)
        : toast.error(action.payload.message);
      state.submitLoading = false;
      state.response = action.payload;
    },
    [updateLead.rejected]: (state, action) => {
      state.submitLoading = false;
      toast.error(action.payload.message);
      state.response = action.payload;
    },
    // )

    // Add employee
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
      if (action.payload?.data?.name) {
        state.profiles?.data?.employees?.push(action.payload?.data);
      }

      console.log(action.payload);
    },
    [addEmployee.rejected]: (state, action) => {
      toast.error(action.payload.message);
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // get All Leads
    // (
    [getAllLeads.pending]: (state) => {
      state.leadsLoading = true;
    },

    [getAllLeads.fulfilled]: (state, action) => {
      state.leadsLoading = false;
      state.leads = action.payload;
    },
    [getAllLeads.rejected]: (state, action) => {
      state.leadsLoading = false;
      state.leads = action.payload;
    },
    // )
    // get All Leads
    // (
    [getSingleLeadContacts.pending]: (state) => {
      state.leadsLoading = true;
    },

    [getSingleLeadContacts.fulfilled]: (state, action) => {
      state.leadsLoading = false;
      state.leads = action.payload;
    },
    [getSingleLeadContacts.rejected]: (state, action) => {
      state.leadsLoading = false;
      state.leads = action.payload;
    },
    // )
    // get Emp Names
    // (
    [getEmpNames.pending]: (state) => {
      state.leadsLoading = true;
    },

    [getEmpNames.fulfilled]: (state, action) => {
      state.leadsLoading = false;
      state.employeeList = action.payload;
    },
    [getEmpNames.rejected]: (state, action) => {
      state.leadsLoading = false;
      state.employeeList = action.payload;
    },
    // )

    // get Analytics
    // (
    [getAnalytics.pending]: (state) => {
      state.analyticsLoading = true;
    },

    [getAnalytics.fulfilled]: (state, action) => {
      state.analyticsLoading = false;
      state.analyticsData = action.payload;
    },
    [getAnalytics.rejected]: (state, action) => {
      state.analyticsLoading = false;
      state.analyticsData = action.payload;
    },
    // )

    // delete Lead
    // (
    [deleteLead.pending]: (state) => {
      // state.analyticsLoading = true;
    },

    [deleteLead.fulfilled]: (state, action) => {
      // state.analyticsLoading = false;
      action.payload.status === true
        ? toast.success(action.payload.message)
        : toast.error(action.payload.message);
      if (action.payload.status === true) {
        state.leads = action.payload;
      }
      state.response = action.payload;
    },
    [deleteLead.rejected]: (state, action) => {
      toast.error(action.payload.message);
      state.response = action.payload;
    },
    // )

    // delete Employee
    // (
    [deleteEmployee.pending]: (state) => {
      // state.analyticsLoading = true;
    },

    [deleteEmployee.fulfilled]: (state, action) => {
      // state.analyticsLoading = false;
      action.payload.status === true
        ? toast.success(action.payload.message)
        : toast.error(action.payload.message);
      if (action.payload.status === true) {
        state.profiles = action.payload;
      }
      state.response = action.payload;
    },
    [deleteEmployee.rejected]: (state, action) => {
      toast.error(action.payload.message);
      state.response = action.payload;
    },
    // )
    // get All Organization
    // (
    [getallOrganization.pending]: (state) => {
      state.profilesLoading = true;
    },

    [getallOrganization.fulfilled]: (state, action) => {
      state.profilesLoading = false;
      state.profiles = action.payload;
    },
    [getallOrganization.rejected]: (state, action) => {
      toast.error(action.payload.message);
      state.response = action.payload;
    },
    // )

    // addOrganization
    // (
    [addOrganization.pending]: (state) => {
      // toast.loading("Please wait...");
      state.submitLoading = true;
    },

    [addOrganization.fulfilled]: (state, action) => {
      action.payload.status === true
        ? toast.success(action.payload.message)
        : toast.error(action.payload.message);

      state.submitLoading = false;
      state.response = action.payload;
      if (action.payload?.data?.name) {
        state.profiles?.data?.employees?.push(action.payload?.data);
      }

      console.log(action.payload);
    },
    [addOrganization.rejected]: (state, action) => {
      toast.error(action.payload.message);
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )

    // adminAccess
    // (
    [adminAccess.pending]: (state) => {
      // toast.loading("Please wait...");
      state.submitLoading = true;
    },

    [adminAccess.fulfilled]: (state, action) => {
      action.payload.status === true
        ? toast.success(action.payload.message)
        : toast.error(action.payload.message);
      state.response = action.payload;
      state.submitLoading = false;
    },
    [adminAccess.rejected]: (state, action) => {
      toast.error(action.payload.message);
      state.submitLoading = false;
      state.response = action.payload;
    },
    // )
  },
});

export default ApiSlice.reducer;
