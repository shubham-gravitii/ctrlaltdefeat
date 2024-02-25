"use client"
import { Input } from "@/components/ui/input";
import { useFormState } from 'react-dom';
import MyButton from "./SubmitButton";
import { BiSolidError } from "react-icons/bi"
import { updateInventory } from "@/lib/actions/inventory.action";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from "react";

const initialState = {
    error: false,
    message: '',
}



export default function UpdateForm({ name, data }: { name: string, data: any }) {
    const [value, setValue] = useState(data);
    const [state, clientAction] = useFormState(updateInventory,initialState);
    console.log(value)
    return (
        <Dialog>
            <DialogTrigger asChild>
            <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Update
                  </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Modify {name}</DialogTitle>
                    <DialogDescription>
                        Fill and Click send when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <form className="mt-6" action={clientAction}>
                    <Input
                        type='hidden'
                        value={value.inventoryId}
                        placeholder="Enter title of tool"
                        name="toolId"
                        required
                    />

                  <section className="w-full">
                        <label htmlFor="toolName">Seed Name:</label>
                        <Input
                            type='text'
                            value={value.name}
                            onChange={(e) => { setValue({ ...value, name: e.target.value }) }}
                            placeholder="Enter title of seed"
                            name="name"
                            required
                        />
                    </section>

                    <section className="w-full">
                        <label htmlFor="type">Seed Type:</label>
                        <Input type='text'
                            value={value.type}
                            onChange={(e) => { setValue({ ...value, type: e.target.value }) }}
                            placeholder="Enter title of tool Type"
                            name="type"
                            required
                        />
                    </section>

                    <section className="w-full">
                        <label htmlFor="expiry">Expiry:</label>
                        <Input
                            value={value.expiry}
                            onChange={(e) => { setValue({ ...value, expiry: e.target.value.toString() }) }}
                            type="date"
                            name='expiry'
                            required
                        />
                    </section>


                    {/* <section className="w-full md:w-1/2">
                    <label htmlFor="imgUrl">uses:</label>
                    <Input type='file' accept='.jpg, .png' name="img" required />
                </section> */}

                    {
                        state?.error &&
                        <div className='flex gap-4 p-4 mt-6 mx-auto bg-red-200 rounded-sm'>
                            <BiSolidError className="h-5 w-5 text-red-500" />
                            <p className="text-sm text-red-500">{state?.message}</p>
                        </div>
                    }
                    <div className="flex gap-8">
                        <MyButton className="w-full" disable={false} />
                    </div>
                </form >
            </DialogContent>
        </Dialog>
    )
}