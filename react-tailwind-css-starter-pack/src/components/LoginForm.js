import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const LoginForm = ({setisLogin}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    role: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // backend Logic
    setisLogin(true);
    console.log("Employee Data:", formData);
    toast.success("Account created" ,{position: "top-center" , autoClose: 2000 , theme: "dark"});
    navigate("/home");
  };

  return (
    <div className="flex justify-center">
    
  <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-[40rem] gap-y-4 mt-6">
      <h1 className="font-medium text-gray-900 dark:text-gray-200 text-3xl">Login</h1>

    <div className="space-y-5 w-full">

      <div>
        <label className="text-base font-medium text-gray-900 dark:text-gray-200">
          Email Id
        </label>
        <div className="mt-2.5">
          <input
            required
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
         <label className="text-base font-medium text-gray-900 dark:text-gray-200">
           Role
          </label>
            <div className="mt-2.5">
              <select
              required
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm text-gray-900 dark:text-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:focus:ring-gray-400"
              name="role"
              value={formData.role}
              onChange={handleChange}
              >
                   <option value="" disabled>Select Your Role</option>
                   <option value="Admin">Admin</option>
                   <option value="Manager">Manager</option>
                   <option value="Employee">Employee</option>
              </select>
        </div>
      </div>

      <div>
        <label className="text-base font-medium text-gray-900 dark:text-gray-200">
          Password
        </label>
        <div className="mt-2.5">
          <input
            required
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
        >
          Login
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      </div>
    </div>
  </form>
</div>
  );
};

export default LoginForm;
