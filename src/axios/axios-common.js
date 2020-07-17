import axios from "./axios-config-common";

export const axiosGET = (url, calbackFunc, data) => {
  let body = {};
  if (data) {
    body = data;
  }
  axios
    .get(url)
    .then(response => {
      calbackFunc({ type: "SUCCESS", responseDto: response });
    })
    .catch(error => {
      if (error.response === undefined) {
        calbackFunc({ type: "ERROR", errorDto: "SESSION_TIME_OUT" });
      } else {
        if (error.response.data.error === "ERR_INVALID_SIGNATURE_OR_CLAIM") {
          calbackFunc({ type: "ERROR", errorDto: "SESSION_TIME_OUT" });
        } else {
          calbackFunc({ type: "ERROR", errorDto: error.response });
        }
      }
    });
};

export const axiosPOST = (url, calbackFunc, data) => {
  axios
    .post(url, data)
    .then(response => {
      calbackFunc({ type: "SUCCESS", responseDto: response });
    })
    .catch(error => {
      if (error.response === undefined) {
        calbackFunc({ type: "ERROR", errorDto: "SESSION_TIME_OUT" });
      } else {
        if (error.response.data.error === "ERR_INVALID_SIGNATURE_OR_CLAIM") {
          calbackFunc({ type: "ERROR", errorDto: "SESSION_TIME_OUT" });
        } else {
          calbackFunc({ type: "ERROR", errorDto: error.response });
        }
      }
    });
};


export const axiosPUT = (url, calbackFunc, data) => {
  axios
    .put(url, data)
    .then(response => {
      calbackFunc({ type: "SUCCESS", responseDto: response });
    })
    .catch(error => {
      console.log(error);
      if (error.response === undefined) {
        calbackFunc({ type: "ERROR", errorDto: "SESSION_TIME_OUT" });
      } else {
        if (error.response.data.error === "ERR_INVALID_SIGNATURE_OR_CLAIM") {
          calbackFunc({ type: "ERROR", errorDto: "SESSION_TIME_OUT" });
        } else {
          calbackFunc({ type: "ERROR", errorDto: error.response });
        }
      }
    });
};

export const axiosDELETE = (url, calbackFunc, payload) => {
  axios
    .delete(url, { data: payload })
    .then(response => {
      calbackFunc({ type: "SUCCESS", responseDto: response });
    })
    .catch(error => {
      if (error.response === undefined) {
        calbackFunc({ type: "ERROR", errorDto: "SESSION_TIME_OUT" });
      } else {
        if (error.response.data.error === "ERR_INVALID_SIGNATURE_OR_CLAIM") {
          calbackFunc({ type: "ERROR", errorDto: "SESSION_TIME_OUT" });
        } else {
          calbackFunc({ type: "ERROR", errorDto: error.response });
        }
      }
    });
};
