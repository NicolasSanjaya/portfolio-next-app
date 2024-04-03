"use client";
import React, { useState } from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(data: FormData) {
    setIsLoading(true);
    sendEmail(data, setData, setIsLoading);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-black"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Full Name"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-500 focus:shadow-md"
          {...register("name", { required: true })}
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          autoComplete="off"
        />
        {errors.name && <p className="text-red-500 mt-2">Name is required</p>}
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-black"
        >
          Email Address
        </label>
        <input
          id="email"
          type="text"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-500 focus:shadow-md"
          {...register("email", {
            required: {
              value: true,
              message: "required",
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "invalid",
            },
          })}
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          autoComplete="off"
        />
        {errors.email?.message === "required" && (
          <p className="text-red-500 mt-2">Email is required</p>
        )}
        {errors.email?.message === "invalid" && (
          <p className="text-red-500 mt-2">Invalid Email Address</p>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-500 focus:shadow-md"
          {...register("message", { required: true })}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 mt-2">Message is required</p>
        )}
      </div>
      <div>
        <button className="hover:shadow-form rounded-md bg-green-700 py-3 px-8 text-base font-semibold text-white outline-none hover:bg-green-900 transition-all duration-500">
          {isLoading ? <div className="custom-loader"></div> : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Contact;
