"use client"
import React from 'react'
import bgSignIn from '@/assests/login.svg'
import { Input } from "@/components/ui/input";
import { useFormState } from 'react-dom';
import MyButton from "@/components/SubmitButton";
import { inventoryAnalysis } from "@/lib/actions/analysis.action";
import { useState } from "react";
import { BiSolidError } from "react-icons/bi";



export default function page() {
    const data = [{
        name: "Shubham",
        phoneNo: "928933333",
        cropName: "Wheat",
        quantity: "12",
        price: "100",
    },{
        name: "Nishant",
        phoneNo: "8279422662",
        cropName: "Barley",
        quantity: "12",
        price: "100",
    },{
        name: "Ayush",
        phoneNo: "9012043030",
        cropName: "Maize",
        quantity: "12",
        price: "100",
    },
    {
        name: "Rohit",
        phoneNo: "938921222",
        cropName: "Maize",
        quantity: "12",
        price: "100",
    },]
    

    return (
        <div className='relative'>
            <img src={bgSignIn.src} alt="" className="bgLoginImg" />

            <div className='absolute top-12 flex flex-col justify-center items-center w-[100vw]'>
                <h1 className='text-5xl '>Market Place</h1>
                <div className="posts flex justify-center items-center mt-5 pt-5">
                    {data.map((item: any) => (
                        <div key={item.phoneNo} className='bg-violet-950 p-5 rounded-lg text-white mr-4 '>
                            <h3>Crop Name: {item.cropName}</h3>
                            <h3>Quantity(in Kg): {item.quantity}</h3>
                            <h3>Price (per Kg ): {item.price} rupees</h3>
                            <h3>Name of Seller: {item.name}</h3>
                            <h3>Phone Number: {item.phoneNo}</h3>
                        </div>
                    ))}
                </div>
                
                
               
            </div>
        </div>
    )
}
