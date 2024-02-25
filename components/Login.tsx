"use client"
import { useState } from "react";
import { useFormState } from "react-dom";
import { loginWithCredentials } from '@/lib/actions/auth.action';
import "./Login.css";
import bgSignIn from "../assests/login.svg"
import { ToastContainer, toast } from 'react-toastify';
import Button from './SubmitButton'
import { BiSolidError } from "react-icons/bi"

import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [message, clientAction] = useFormState(loginWithCredentials, undefined);
  return (
    <>

      <div className="loginContainer flex justify-center items-center">
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
        <div className="formLogin bg-white flex flex-col justify-center  ">
          <div className=" formLoginInside  w-full p-[20px] m-auto  rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700 ">
              Sign in
            </h1>
            <form action={clientAction} className="mt-6">
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
                  value={loginData.email}
                  onChange={(e: any) => setLoginData({ ...loginData, email: e.target.value })} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-md font-semibold text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={(e: any) => setLoginData({ ...loginData, password: e.target.value })}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <a
                href="/login"
                className="text-xs text-purple-600 hover:underline"
              >
                Forget Password?
              </a>
              <div className="mt-2">
                {/* <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                >
                  Login
                </button> */}
                <Button className='w-full' disable={!loginData.password || !loginData.email} />
                {message?.error && (
                  <div className='flex gap-4 p-4 mt-6 bg-red-200 rounded-sm'>
                    <BiSolidError className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{message.message}</p>
                  </div>
                )}
              </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-black">
              {" "}
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-medium text-purple-600 hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>


    </>

  );
}
