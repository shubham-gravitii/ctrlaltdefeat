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
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button"
import { addTool, deleteTool, updateTool } from "@/lib/actions/tool.action";
import { useState } from "react";
import DeleteButton from "../DeleteButton";


const initialState = {
    error: false,
    message: '',
}


export function AddToolInfoForm() {
    const [state, clientAction] = useFormState(addTool, initialState);

    return (
        <form className="flex flex-col gap-6 mt-6" action={clientAction}>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <section className="w-full md:w-1/2">
                    <label htmlFor="toolName">Tool Name:</label>
                    <Input type='text' placeholder="Enter title of tool" name="toolName" required />
                </section>
                <section className="w-full md:w-1/2">
                    <label htmlFor="toolType">Tool Type:</label>
                    <Input type='text' placeholder="Enter title of tool Type" name="toolType" required />
                </section>

            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <section className="w-full md:w-1/2">
                    <label htmlFor="toolPrice">Tool Price:</label>
                    <Input type="number" name='toolPrice' required />
                </section>

                <section className="w-full md:w-1/2">
                    <label htmlFor="uses">Uses:</label>
                    <Input type="text" name='uses' required />
                </section>

                {/* <section className="w-full md:w-1/2">
                    <label htmlFor="imgUrl">uses:</label>
                    <Input type='file' accept='.jpg, .png' name="img" required />
                </section> */}
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

export function ModifyToolInfo({ tools }: { tools: any[] }) {

    const rows = tools.map((tool: any) => (
        <TableRow key={tool.id}>
            <TableCell>{tool.toolName}</TableCell>
            <TableCell>{tool.toolType}</TableCell>
            <TableCell>{tool.toolPrice}</TableCell>
            <TableCell>{tool.uses}</TableCell>
            <TableCell><AddForm name={tool.toolName} data={tool} /></TableCell>
        </TableRow>
    ));

    return (
        <Table>
            <TableCaption>A list of tools Information.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Tool Name</TableHead>
                    <TableHead>Tool Type</TableHead>
                    <TableHead>Tool Price</TableHead>
                    <TableHead>Uses</TableHead>
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
    const [state, clientAction] = useFormState(isDelete ? deleteTool : updateTool, initialState);

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
                        name="toolId"
                        required
                    />

                    <section className="w-full">
                        <label htmlFor="toolName">Tool Name:</label>
                        <Input
                            type='text'
                            value={value.toolName}
                            onChange={(e) => { setValue({ ...value, toolName: e.target.value }) }}
                            placeholder="Enter title of tool"
                            name="toolName"
                            required
                        />
                    </section>

                    <section className="w-full">
                        <label htmlFor="toolType">Tool Type:</label>
                        <Input type='text'
                            value={value.toolType}
                            onChange={(e) => { setValue({ ...value, toolType: e.target.value }) }}
                            placeholder="Enter title of tool Type"
                            name="toolType"
                            required
                        />
                    </section>

                    <section className="w-full">
                        <label htmlFor="toolPrice">Tool Price:</label>
                        <Input
                            value={value.toolPrice}
                            onChange={(e) => { setValue({ ...value, toolPrice: e.target.value }) }}
                            type="number"
                            name='toolPrice'
                            required
                        />
                    </section>

                    <section className="w-full">
                        <label htmlFor="uses">Uses:</label>
                        <Input
                            value={value.uses}
                            onChange={(e) => { setValue({ ...value, uses: e.target.value }) }}
                            type="text"
                            name='uses'
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
                        <DeleteButton onClick={setIsDelete} className="w-full" disable={false} />
                        <MyButton className="w-full" disable={false} />
                    </div>
                </form >
            </DialogContent>
        </Dialog>
    )
}
