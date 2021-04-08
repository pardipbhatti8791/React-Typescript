import axios from "axios";
import { toastr } from "react-redux-toastr";

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true
});

service.interceptors.response.use(
  (response) => {
    const { data } = response;
    successMessages(data);
    return response;
  },
  (error) => {
    if (error.response === undefined) {
      errorMessages({
        message: messages["typeUndefined"],
        type: "error",
        success: false,
      });
      return;
    }
    errorMessages({
      message: JSON.stringify(error.response.data),
      type: "error",
      success: false,
    });
  }
);

export default service;

/**
 * @param data
 */
const successMessages = (data: any) => {
  if (
    data.hasOwnProperty("success") &&
    data.success === true &&
    data.hasOwnProperty("type")
  ) {
    return toastr.success("Great!", messages[data.type]);
  }
};

/**
 * @param data
 */
const errorMessages = (data: any) => {
  if (
    data.hasOwnProperty("success") &&
    data.success === false &&
    data.hasOwnProperty("type")
  ) {
    return toastr.error("Bammer!", data.message);
  }
};

const messages: any = {
  loginFailed: "MX Record added successfully!",
  mxDeleted: "MX Record deleted!",
  mxUpdated: "MX Record updated successfully!",
};
