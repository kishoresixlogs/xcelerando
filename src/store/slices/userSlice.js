import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_APIURL;
axios.defaults.timeout = 15000;

const initialState = {
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  user: null,
  basics: null,
  career: null,
  physical: null,
  personality: null,
  theTea: null,
  userLocation: null,
  description: null,
  topUsers: [],
  searchUsers: [],
  newMember: [],
  notificationCount: 0,
  deviceToken: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    sessionOut: (state) => {
      state.status = "idle";
      state.error = null;
      state.user = null;
      state.personality = null;
      state.userLocation = null;
      state.description = null;
      state.topUsers = [];
      state.newMember = [];
      state.searchUsers = [];
      state.notificationCount = 0
    },
    updateCount: (state, action) => {
      state.notificationCount = action?.payload?.count;
    },
    setDeviceToken: (state, action) => {
      console.log(action?.payload?.deviceToken)
      state.deviceToken = action?.payload?.deviceToken;
    },
  },
  extraReducers(builder) {
    builder

      //pending
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          switch (action.type) {
            case "getNotifications/pending":
              state.status = "idle";
              break;
            case "readAllNotifications/pending":
              state.status = "idle";
              break;
            default:
              state.status = "loading";
              console.log("Unknown action", action);
               break;
          }
        }
      )

      //fulfilled
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.error = null;
          switch (action.type) {
            case "signin/fulfilled":
              state.user = action.payload.data.data;
              axios.defaults.headers.common["Authorization"] = action.payload.data.data.token;
              break;
            case "socialLogin/fulfilled":
              state.user = action.payload.data.data;
              axios.defaults.headers.common["Authorization"] = action.payload.data.data.token;
              break;
            case "verifyaccount/fulfilled":
              state.user = action.payload.data.data;
              axios.defaults.headers.common["Authorization"] = action.payload.data.data.token;
              break;
            case "editProfile/fulfilled":
              state.user = action.payload.data.data;
              break;
            case "signout/fulfilled":
              localStorage.clear();
              state.status = "idle";
              state.error = null;
              state.user = null;
              state.basics = null;
              state.career = null;
              state.physical = null;
              state.personality = null;
              state.theTea = null;
              state.userLocation = null;
              state.description = null;
              state.notificationCount = 0;
              state.topUsers = [];
              state.newMember = [];
              state.searchUsers = [];
              break;
            case "exploreData/fulfilled":
              state.topUsers = action?.payload?.data?.topUser;
              state.newMember = action?.payload?.data?.newMember;
              break;
            default:
              console.log("Unknown action", action);
              break;
          }
        }
      )

      //rejected
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "failed";
          if (action?.payload?.code == "ERR_NETWORK") {
            state.status = "failed";
          } else if (action.payload.status == 401) {
            state.status = "failed";
            state.error = action.payload.status;
          } else {
            switch (action.type) {
              case "signin/rejected":
                state.status = "failed";
                state.error = action.payload.data.message;
                state.user = action.payload.data.data;
                break;
              default:
                state.status = "failed";
                state.error = action.payload.data.message;
                console.log("Unknown action", action);
                break;
            }
          }
        }
      );
  },
});
export const getUserStatus = (state) => state?.users?.status;
export const getUserError = (state) => state?.users?.error;
export const getUserToken = (state) => state?.users?.user?.token;
export const getProfile = (state) => state?.users?.user;
export const getPersonality = (state) => state?.users?.personality;
export const getUserLocation = (state) => state?.users?.userLocation;
export const getDescription = (state) => state?.users?.description;
export const getNewMember = (state) => state?.users?.newMember;
export const getTopUser = (state) => state?.users?.topUsers;
export const getSearchUsers = (state) => state?.users?.searchUsers;
export const getNotificationCount = (state) => state?.users?.notificationCount;
export const getDeviceToken = (state) => state?.users?.deviceToken;

export const { sessionOut, updateCount, setDeviceToken } = userSlice.actions;
export default userSlice.reducer;
