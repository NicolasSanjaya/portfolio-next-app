"use client";
import React, { useState } from "react";
import { ToastContainer, TypeOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = ({
  className,
  type = "info",
  message = "Test",
}: {
  className?: string;
  type?: TypeOptions;
  message?: string;
}) => {
  const notify = () =>
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: type,
    });

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
    </div>
  );
};

export default Alert;
