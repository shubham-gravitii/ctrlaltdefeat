"use client"
import React, { useState } from 'react'
import bgSignIn from "@/assests/login.svg";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { useCurrentUser } from '@/hooks/use-current-user';
import { addInventory } from '@/lib/actions/inventory.action';
import { InventoryType } from '@prisma/client';
export default function AddItems() {
    const user=useCurrentUser()
    console.log(user)
    if(!user){
        return;
    }
    const [isLoading, setisLoading] = useState(false)
    const initialFormState = {
        "type": "",
        "name": "",
        "expiery": new Date(),
        "quantity": "0",
        "url": "images.jpg",
        "createdById": user?.id || "65dabc6567f5c770a394eb2b"
    }
    const [formState, setFormState] = useState(initialFormState)
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (name === "type") {
            setFormState({
                ["type"]: value, "name": "",
                "expiery": new Date(),
                "quantity": "0",
                "url": "images.jpg",
                "createdById": user?.id || "65dabc6567f5c770a394eb2b"
            })
        }
        else {
            setFormState({ ...formState, [name]: value });
        }
    }
    const handleFormSubmit = async(e: any) => {
        e.preventDefault()
        setisLoading(true)
        const inventory = await addInventory({...formState,type: 'crop'?"SEED":"TOOL", quantity:parseInt(formState.quantity), expiery: formState.expiery.toISOString()})
        console.log(formState)
        // toast("succesfully")
        // console.log(formState)
        setisLoading(false)
    }
    return (
        <>
            {isLoading ?
                <div className="parentLoader">
                    <span className="loader"></span>
                </div>
                :
                <div className="loginContainer flex flex-col justify-center items-center">
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

                    <div className="bg-white p-5  formSignUp  flex flex-col   overflow-hidden absolute rounded-xl">
                        <div>
                            <h3 className="text-3xl font-semibold text-center text-green-700 mt-5">
                                Add to the Inventory
                            </h3>
                        </div>
                        <div className="w-full px-6 py-4 mt-2 overflow-hidden bg-[#efefef] shadow-md sm:max-w-lg sm:rounded-lg">
                            <form className="p-3">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-md font-medium text-gray-700 undefined"
                                    >
                                        Type
                                    </label>
                                    <div className="flex flex-col items-start">


                                        <select name='type' required={true} value={formState.type} onChange={handleChange} className='block w-full px-4 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none '>
                                            <option value="">Select</option>
                                            <option value="crop">Crop</option>
                                            <option value="tool">Tool</option>
                                        </select>
                                    </div>
                                </div>
                                {formState.type === "" ? "" :
                                    <>{
                                        formState.type === "crop" ? <><div className="w-full max-w-xs">
                                            <label
                                                htmlFor="name"
                                                className="block text-md font-medium text-gray-700 undefined"
                                            >
                                                Name of the crop
                                            </label>
                                            <div className="flex flex-col items-start">
                                                <select name='name' value={formState.name} onChange={handleChange} className='block w-full px-4 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none '>
                                                    <option value="">Select</option>
                                                    <option value="wheat">Wheat</option>
                                                    <option value="barley">Barley</option>
                                                    <option value="oats">Oats</option>
                                                    <option value="gram">Gram</option>
                                                    <option value="mustard">Mustard</option>
                                                    <option value="linseed">Linseed</option>
                                                    <option value="rice">Rice</option>
                                                    <option value="maize">Maize</option>
                                                    <option value="millet">Millet</option>
                                                    <option value="ragi">Ragi</option>
                                                    <option value="pulses">Pulses</option>
                                                    <option value="soyabean">Soyabean</option>
                                                    <option value="groundnut">Groundnut</option>
                                                </select>
                                            </div>

                                        </div>
                                            <div className="mt-4">
                                                <label
                                                    htmlFor="email"
                                                    className="block text-md font-medium text-gray-700 undefined"
                                                >
                                                    Date of purchase
                                                </label>
                                                <div className="flex flex-col items-start">
                                                    <DatePicker selected={formState.expiery} onChange={handleChange} name="date" className="p-2 " />

                                                    {/* <input
                                 placeholder="Enter your email"
                                 required={true}
                                 type="date"
                                 name="date"
                                 value={formState.date}
                                 onChange={handleChange}
                                 className="p-2 bg-[#f9f9f9] block w-full mt-1 border-gray-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                             /> */}
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <label
                                                    htmlFor="password"
                                                    className="block text-md font-medium text-gray-700 undefined"
                                                >
                                                    Quantity (in Kgs)
                                                </label>
                                                <div className="flex flex-col items-start">
                                                    <input
                                                        required
                                                        placeholder="Enter the quantity"

                                                        type="number"
                                                        onChange={handleChange}
                                                        value={formState.quantity}
                                                        name="quantity"
                                                        className="p-2 block w-full bg-[#f9f9f9] mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                                                    />

                                                </div>
                                            </div>

                                            <div className="flex items-center mt-4">
                                                <button
                                                    onClick={handleFormSubmit}
                                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                                                >
                                                    Add Data
                                                </button>
                                            </div></> : <><div className="w-full max-w-xs">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-md font-medium text-gray-700 undefined"
                                                >
                                                    Name of the tool
                                                </label>
                                                <input
                                                    placeholder={"Enter tool's name"}
                                                    required={true}
                                                    type="text"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    className="p-2 bg-[#f9f9f9] block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <label
                                                    htmlFor="email"
                                                    className="block text-md font-medium text-gray-700 undefined"
                                                >
                                                    Date of purchase
                                                </label>
                                                <div className="flex flex-col items-start">
                                                    <DatePicker selected={formState.expiery} onChange={handleChange} name="date" className="p-2 " />

                                                    {/* <input
                                     placeholder="Enter your email"
                                     required={true}
                                     type="date"
                                     name="date"
                                     value={formState.date}
                                     onChange={handleChange}
                                     className="p-2 bg-[#f9f9f9] block w-full mt-1 border-gray-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                                 /> */}
                                                </div>
                                            </div>


                                            <div className="flex items-center mt-4">
                                                <button
                                                    onClick={handleFormSubmit}
                                                    className="w-full mb-3 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                                                >
                                                    Add Data
                                                </button>
                                            </div></>
                                    }</>

                                }

                            </form>

                        </div>
                    </div>
                </div>
            }


        </>
        // <div>
        //     <div className="form">
        //         <label htmlFor="" className='block text-md font-semibold text-black'>Type</label>
        //         <select value={formData.type} onChange={handleChange} className='block w-full px-4 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none '>
        //             <option value="">Type</option>
        //             <option value="option1">Crop</option>
        //             <option value="option2">Tool</option>
        //         </select>
        //     </div>
        // </div>
    )
}