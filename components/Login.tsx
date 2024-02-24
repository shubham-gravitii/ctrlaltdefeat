"use client"
import { useState } from "react";

import "./Login.css";

import bgSignIn from "../assests/login.svg"


export default function SignIn() {


  const [formState, setFormState] = useState({ email: "", password: "" });
  // eslint-disable-next-line

  const handleChange = (event:any) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event:any) => {
    event.preventDefault();
    // setisLoading(true);
    

    //   Auth.login(data.login.token);

    //   setnotificationMsg("Login Successfull");
      
    // setisLoading(false);

    setFormState({
      email: "",
      password: "",
    });
  };
  return (
    <div className="loginContainer flex justify-center items-center">
      <img src={bgSignIn.src} alt="" className="bgLoginImg"  />
      <div className="formLogin bg-white flex flex-col justify-center  ">
        <div className=" formLoginInside  w-full p-[20px] m-auto  rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 ">
            Sign in
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-md font-semibold text-black"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-md font-semibold text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a
              href="/login"
              className="text-xs text-purple-600 hover:underline"
            >
              Forget Password?
            </a>
            <div className="mt-6">
              <button
                onClick={handleFormSubmit}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-black">
            {" "}
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-medium text-purple-600 hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
