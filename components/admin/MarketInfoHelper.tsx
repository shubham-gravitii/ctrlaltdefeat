"use client"
import { Input } from "@/components/ui/input";
import { useFormState } from 'react-dom';
import MyButton from "../SubmitButton";
import { BiSolidError } from "react-icons/bi"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import DeleteButton from "../DeleteButton";
import { addMarket, deleteMarket, updateMarket } from "@/lib/actions/market.action";


const initialState = {
    error: false,
    message: '',
}


export function AddMarketInfoForm() {
    const [state, clientAction] = useFormState(addMarket, initialState);


    return (
        <form className="flex flex-col gap-6 mt-6" action={clientAction}>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <section className="w-full md:w-1/2">
                    <label htmlFor="cropName">Crop Name:</label>
                    <Input type='text' placeholder="Enter title of crop" name="cropName" required />
                </section>
                <section className="w-full md:w-1/2">
                    <label htmlFor="price">Price:</label>
                    <Input type='number' placeholder="Enter title of price" name="price" required />
                </section>

            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <section className="w-full md:w-1/2">
                    <label htmlFor="quantity">Quantity:</label>
                    <Input type="number" name='quantity' required />
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
    );
};

export function ModifyMarketInfo({ datas }: { datas: any[] }) {

    const rows = datas.map((tool: any) => (
        <TableRow key={tool.id}>
            <TableCell>{tool.cropName}</TableCell>
            <TableCell>{tool.price}</TableCell>
            <TableCell>{tool.quantity}</TableCell>
            <TableCell><AddForm name={tool.toolName} data={tool} /></TableCell>
        </TableRow>
    ));

    return (
        <Table>
            <TableCaption>A list of Market Information.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Crop Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Edit</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows}
            </TableBody>
        </Table>
    )
}

export function AddForm({ name, data }: { name: string, data: any }) {
    const [isDelete, setIsDelete] = useState(false);
    const [value, setValue] = useState(data);
    const [state, clientAction] = useFormState(isDelete ? deleteMarket : updateMarket, initialState);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Modify {name}</Button>
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
                        value={value.id}
                        placeholder="Enter title of tool"
                        name="marketId"
                        required
                    />

                    <section className="w-full">
                        <label htmlFor="toolName">Crop Name:</label>
                        <Input
                            type='text'
                            value={value.cropName}
                            onChange={(e) => { setValue({ ...value, cropName: e.target.value }) }}
                            placeholder="Enter title of tool"
                            name="cropName"
                            required
                        />
                    </section>

                    <section className="w-full">
                        <label htmlFor="toolType">Quantity:</label>
                        <Input type='number'
                            value={value.quantity}
                            onChange={(e) => { setValue({ ...value, quantity: e.target.value }) }}
                            placeholder="Enter quantity"
                            name="quantity"
                            required
                        />
                    </section>

                    <section className="w-full">
                        <label htmlFor="toolPrice">Price:</label>
                        <Input
                            value={value.price}
                            onChange={(e) => { setValue({ ...value, price: e.target.value }) }}
                            type="number"
                            name='price'
                            required
                        />
                    </section>

                    {
                        state?.error &&
                        <div className='flex gap-4 p-4 mt-6 mx-auto bg-red-200 rounded-sm'>
                            <BiSolidError className="h-5 w-5 text-red-500" />
                            <p className="text-sm text-red-500">{state?.message}</p>
                        </div>
                    }
                    <div className="flex gap-8">
                        <DeleteButton onClick={setIsDelete} className="w-full" disable={false} />
                        <MyButton className="w-full" disable={false} />
                    </div>
                </form >
            </DialogContent>
        </Dialog>
    )
}
