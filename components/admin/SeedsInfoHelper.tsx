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
import { Button } from "../ui/button"
import { useState } from "react";
import DeleteButton from "../DeleteButton";
import { addSeed, deleteSeed, updateSeed } from "@/lib/actions/seed.action";


const initialState = {
    error: false,
    message: '',
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const states = ["Bihar", "Gujarat", "Maharashtra", "Punjab", "Tamil Nadu"]
const landTypes = ["Alluvial soils", "Black soils", "Red soils", "Laterite soils"]


export function AddSeedInfoForm() {
    const [state, clientAction] = useFormState(addSeed, initialState);
    return (
        <form className="grid grid-cols-2 gap-6 mt-6" action={clientAction}>
            <section className="w-full grid gap-2">
                <label htmlFor="seedName">Seed Name:</label>
                <Input type='text' placeholder="Enter title of Seed" name="seedName" required />
            </section>


            {/* <div className="w-full md:w-1/2"> */}
            <div className="w-full grid gap-2">
                <label htmlFor="seedSeason">Month for Planting:</label>
                <select name="seedSeason" id="seedSeason" className="border-2 border-slate-200 rounded-md py-2">
                    <option value="">--SELECT--</option>
                    {
                        months.map((month, index) => (
                            <option key={index} value={month}>{month}</option>
                        ))
                    }
                </select>
            </div>

            <section className="w-full grid gap-2">
                <label htmlFor="state">State:</label>
                <select name="state" id="state" className="border-2 border-slate-200 rounded-md py-2">
                    <option value="">--SELECT--</option>
                    {
                        states.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))
                    }
                </select>
            </section>
            {/* </div> */}

            {/* <div className="flex flex-col md:flex-row gap-6 justify-between"> */}
            <section className="w-full grid gap-2">
                <label htmlFor="landType">Soil Type:</label>
                <select name="landType" id="landType" className="border-2 border-slate-200 rounded-md py-2">
                    <option value="">--SELECT--</option>
                    {
                        landTypes.map((landType, index) => (
                            <option key={index} value={landType}>{landType}</option>
                        ))
                    }
                </select>
            </section>

            <section className="w-full">
                <label htmlFor="garde">garde(1-10):</label>
                <Input type="number" name='garde' required />
            </section>

            <section className="w-full">
                <label htmlFor="seedDate">Expiry Date(in months):</label>
                <Input type="number" name='seedDate' required />
            </section>
            {/* </div> */}
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

export function ModifySeedInfo({ seeds }: { seeds: any[] }) {

    const rows = seeds.map((seed: any) => (
        <TableRow key={seed.id}>
            <TableCell>{seed.seedName}</TableCell>
            <TableCell>{seed.seedSeason}</TableCell>
            <TableCell>{seed.seedDate}</TableCell>
            <TableCell>{seed.state}</TableCell>
            <TableCell>{seed.landType}</TableCell>
            <TableCell>{seed.garde}</TableCell>
            <TableCell><AddForm name={seed.toolName} data={seed} /></TableCell>
        </TableRow>
    ));

    return (
        <Table>
            <TableCaption>A list of Seeds Information.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Seed Name</TableHead>
                    <TableHead>Seed Season</TableHead>
                    <TableHead>Seed Date</TableHead>
                    <TableHead>State</TableHead>
                    <TableHead>Land Type</TableHead>
                    <TableHead>Garde</TableHead>
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
    const [state, clientAction] = useFormState(isDelete ? deleteSeed : updateSeed, initialState);

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
                        name="seedId"
                        required
                    />

                    <section className="w-full">
                        <label htmlFor="toolName">Seed Name:</label>
                        <Input
                            type='text'
                            value={value.seedName}
                            onChange={(e) => { setValue({ ...value, seedName: e.target.value }) }}
                            placeholder="Enter title of tool"
                            name="seedName"
                            required
                        />
                    </section>

                    <section className="w-full">
                        <label htmlFor="seedSeason">Seed Season:</label>
                        <Input type='text'
                            value={value.seedSeason}
                            onChange={(e) => { setValue({ ...value, seedSeason: e.target.value }) }}
                            placeholder="Enter title of tool Type"
                            name="seedSeason"
                            required
                        />
                    </section>

                    <section className="w-full">
                        <label htmlFor="seedDate">Seed Date:</label>
                        <Input
                            value={value.seedDate}
                            onChange={(e) => { setValue({ ...value, seedDate: e.target.value }) }}
                            type="date"
                            name='seedDate'
                        />
                    </section>

                    <section className="w-full">
                        <label htmlFor="state">State:</label>
                        <Input
                            value={value.state}
                            onChange={(e) => { setValue({ ...value, state: e.target.value }) }}
                            type="text"
                            name='state'
                            required
                        />
                    </section>

                    <section className="w-full">
                        <label htmlFor="landType">Land Type:</label>
                        <Input
                            value={value.landType}
                            onChange={(e) => { setValue({ ...value, landType: e.target.value }) }}
                            type="text"
                            name='landType'
                            required
                        />
                    </section>

                    <section className="w-full">
                        <label htmlFor="landType">Garde:</label>
                        <Input
                            value={value.garde}
                            onChange={(e) => { setValue({ ...value, garde: e.target.value }) }}
                            type="text"
                            name='garde'
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
