"use client"
import React from 'react'
import { useState } from "react";
import { BiSolidError } from "react-icons/bi";
import { useFormState } from 'react-dom';
import { inventoryAnalysis } from "@/lib/actions/analysis.action";
import { Input } from "@/components/ui/input";
import MyButton from "@/components/SubmitButton";

const initialState = {
    error: false,
    message: '',
}
export default function Page() {
    const [state, clientAction] = useFormState(inventoryAnalysis, initialState);
  return (
    <div>
                    <h1 className="text-4xl my-4 font-extrabold text-center">Post your items.</h1>
                    <form className="flex max-w-[400px] flex-col gap-6 mt-6 mx-auto" >

                        <section className="w-full">
                            <label htmlFor="name">Name:</label>
                            <Input type='text' placeholder="Enter Name" name="name" required />
                        </section>

                        <div className="grid grid-cols-2 gap-6 justify-between">
                            <section className="w-full grid gap-2">
                                <label htmlFor="phone">Phone:</label>
                                <Input type="number" name='phone' />
                            </section>
                            <section className="w-full grid gap-2">
                                <label htmlFor="cropName">Crop Name:</label>
                                <Input type="text" name='cropName' />
                            </section>

                        </div>
                        <div className="grid grid-cols-2 gap-6 justify-between">
                            <section className="w-full grid gap-2">
                                <label htmlFor="quantity">Quantity:</label>
                                <Input type="number" name='quantity' />
                            </section>
                            <section className="w-full grid gap-2">
                                <label htmlFor="price">Price:</label>
                                <Input type="text" name='price' />
                            </section>

                        </div>


                        {
                            state?.error &&
                            <div className='flex gap-4 p-4 mt-6 mx-auto bg-red-200 rounded-sm'>
                                <BiSolidError className="h-5 w-5 text-red-500" />
                                <p className="text-sm text-red-500">{state?.message}</p>
                            </div>
                        }
                        <MyButton disable={false} />

                    </form >

                </div>
  )
}
