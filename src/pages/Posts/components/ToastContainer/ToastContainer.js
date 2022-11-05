import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function MyToast() {
  return (
    <ToastContainer position="top-center" autoClose={3000} theme="colored" />
  );
}
export default MyToast;
