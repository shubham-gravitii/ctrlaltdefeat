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


export function AddSeedInfoForm() {
    const [state, clientAction] = useFormState(addSeed, initialState);
    return (
        <form className="flex flex-col gap-6 mt-6" action={clientAction}>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <section className="w-full md:w-1/2">
                    <label htmlFor="seedName">Seed Name:</label>
                    <Input type='text' placeholder="Enter title of Seed" name="seedName" required />
                </section>
                <section className="w-full md:w-1/2">
                    <label htmlFor="seedSeason">Seed Season:</label>
                    <Input type='text' placeholder="Enter title of Seed Season" name="seedSeason" required />
                </section>

            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <section className="w-full md:w-1/2">
                    <label htmlFor="seedDate">Seed Date:</label>
                    <Input type="date" name='seedDate' required />
                </section>

                <section className="w-full md:w-1/2">
                    <label htmlFor="state">State:</label>
                    <Input type="text" name='state' required />
                </section>

                {/* <section className="w-full md:w-1/2">
                    <label htmlFor="imgUrl">state:</label>
                    <Input type='file' accept='.jpg, .png' name="img" required />
                </section> */}
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <section className="w-full md:w-1/2">
                    <label htmlFor="landType">Land Type:</label>
                    <Input type="text" name='landType' required />
                </section>

                <section className="w-full md:w-1/2">
                    <label htmlFor="garde">garde:</label>
                    <Input type="text" name='garde' required />
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
