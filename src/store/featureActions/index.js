import { deleteRequest, getRequest, postRequest } from "../apiHelper";

//POST REQUEST
export const signinUser = postRequest("api/signin/", "signin");
export const signUpUser = postRequest("api/signup/", "signup");
// export const socialLogin = postRequest("api/socialLogin/", "socialLogin");
export const verifyOTP = postRequest("api/verifyaccount/", "verifyaccount");
export const resendOTP = postRequest("api/resendotp/", "resendotp");
export const forgetPassword = postRequest("api/forgetPassword/", "forgetPassword");
export const resetPassword = postRequest("api/resetPassword/", "resetPassword");
export const changePassword = postRequest("api/changepassword/", "changepassword");
export const editProfile = postRequest("api/editProfile/", "editProfile");
export const userLogout = postRequest("api/signout/", "signout");
export const blockUnBlock = postRequest("api/user/blockUnblock/", "blockUnblock");
export const addCard = postRequest("api/user/addCard/", "addCard");

//GET REQUEST
export const exploreData = getRequest("api/user/exploreData", "exploreData");
export const getAllCard = getRequest("api/user/getAllCard/", "getAllCard");
export const getNotifications = getRequest("api/user/getNotifications/", "getNotifications");
export const readAllNotifications = getRequest("api/user/readAllNotifications/", "readAllNotifications");
export const dashboard = getRequest("admin/dashboard/", "dashboard");
export const getAllUsers = getRequest("admin/getAllUsers/", "getAllUsers");

//DELETE REQUEST
export const deleteCard = deleteRequest("api/user/deleteCard/", "deleteCard");
export const deleteAccount = deleteRequest("admin/deleteAccount/", "deleteAccount");
