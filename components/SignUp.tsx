"use client";
import { useState, useContext, useEffect } from "react";
import bgSignIn from "@/assests/login.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerWithCredentials } from '@/lib/actions/auth.action';
import { useFormState } from 'react-dom';
import { BiSolidError } from "react-icons/bi"
// import { Link, useNavigate } from "react-router-dom";
// import { useMutation } from "@apollo/client";
// import { ADD_USER } from "../utils/mutations";
// import Auth from "../utils/auth";
// import AlertContext from "../Context/Alert/AlertContext";
// import LoaderContext from "../Context/LoaderContext";
import "./SignUp.css";
import Button from './SubmitButton';

export default function SignUp() {
  const [isLoading, setisLoading] = useState(false)
  const states = [
    { name: "state", label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { name: "state", label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
    { name: "state", label: "Assam", value: "Assam" },
    { name: "state", label: "Bihar", value: "Bihar" },
    { name: "state", label: "Chhattisgarh", value: "Chhattisgarh" },
    { name: "state", label: "Goa", value: "Goa" },
    { name: "state", label: "Gujarat", value: "Gujarat" },
    { name: "state", label: "Haryana", value: "Haryana" },
    { name: "state", label: "Himachal Pradesh", value: "Himachal Pradesh" },
    { name: "state", label: "Jharkhand", value: "Jharkhand" },
    { name: "state", label: "Karnataka", value: "Karnataka" },
    { name: "state", label: "Kerala", value: "Kerala" },
    { name: "state", label: "Madhya Pradesh", value: "Madhya Pradesh" },
    { name: "state", label: "Maharashtra", value: "Maharashtra" },
    { name: "state", label: "Manipur", value: "Manipur" },
    { name: "state", label: "Meghalaya", value: "Meghalaya" },
    { name: "state", label: "Mizoram", value: "Mizoram" },
    { name: "state", label: "Nagaland", value: "Nagaland" },
    { name: "state", label: "Odisha", value: "Odisha" },
    { name: "state", label: "Punjab", value: "Punjab" },
    { name: "state", label: "Rajasthan", value: "Rajasthan" },
    { name: "state", label: "Sikkim", value: "Sikkim" },
    { name: "state", label: "Tamil Nadu", value: "Tamil Nadu" },
    { name: "state", label: "Telangana", value: "Telangana" },
    { name: "state", label: "Tripura", value: "Tripura" },
    { name: "state", label: "Uttar Pradesh", value: "Uttar Pradesh" },
    { name: "state", label: "Uttarakhand", value: "Uttarakhand" },
    { name: "state", label: "West Bengal", value: "West Bengal" },
  ];
  const [showPassword, setshowPassword] = useState(false);


  const [registerData, setRegisterData] = useState({ name: '', email: '', state: '', password: '', username: "" })
  const [message, clientAction] = useFormState(registerWithCredentials, undefined)

  return (
    <>

      <div className="loginContainer flex justify-center items-center ">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"

        />
        <img src={bgSignIn.src} alt="" className="bgLoginImg" />

        <div className="bg-white  p-5 formSignUp  flex flex-col   overflow-hidden ">
          <div>
            <h3 className="text-3xl font-semibold text-center text-purple-700">
              Sign Up
            </h3>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-[#efefef] shadow-md sm:max-w-lg sm:rounded-lg">
            <form action={clientAction} className="p-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-gray-700 undefined"
                >
                  Full name
                </label>
                <div className="flex flex-col items-start">

                  <input
                    placeholder="Enter your Full Name"
                    required={true}
                    type="text"
                    name="name"
                    value={registerData.name}
                    onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                    className="p-2 bg-[#f9f9f9] block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-gray-700 undefined"
                >
                  Username
                </label>
                <div className="flex flex-col items-start">

                  <input
                    placeholder="Enter your Full Name"
                    required={true}
                    type="text"
                    name="username"
                    value={registerData.username}
                    onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                    className="p-2 bg-[#f9f9f9] block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                  />
                </div>
              </div>
              <div className="w-full max-w-xs">
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-gray-700 undefined"
                >
                  State
                </label>
                <select
                  value={registerData.state}
                  onChange={(e) => setRegisterData({ ...registerData, state: e.target.value })}
                  name="state"
                  className="block w-full px-4 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select a state</option>
                  {states.map((state, index) => (
                    <option key={index} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-gray-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    placeholder="Enter your email"
                    required={true}
                    type="email"
                    name="email"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                    className="p-2 bg-[#f9f9f9] block w-full mt-1 border-gray-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-md font-medium text-gray-700 undefined"
                >
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    placeholder="Enter your password"
                    required={true}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                    value={registerData.password}
                    name="password"
                    className="p-2 block w-full bg-[#f9f9f9] mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                  />
                  <div className="flex justify-center items-center ">
                    <div className="m-2 text-black-500">Show Password</div>
                    <Checkbox
                      onClick={() => {
                        setshowPassword(!showPassword);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                {/* <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    Register
                  </button> */}
                <Button disable={!registerData.email || !registerData.username || !registerData.name || !registerData.password || !registerData.state} className="w-[90px] h-[40px] p-0" />
                {message?.error && (
                  <div className='flex gap-4 p-3 mt-2 bg-red-200 rounded-sm'>
                    <BiSolidError className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{message.message}</p>
                  </div>
                )}
              </div>
            </form>
            <div className="mt-4 text-black">
              Already have an account?{" "}
              <span>
                <a
                  className="text-purple-600 hover:underline cursor-pointer"
                  href="/login"
                >
                  Log in
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
