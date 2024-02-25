"use client"
import { Input } from "@/components/ui/input";
import { useFormState } from 'react-dom';
import MyButton from "@/components/SubmitButton";
import { BiSolidError } from "react-icons/bi";
import { addSeed } from "@/lib/actions/seed.action";


const initialState = {
    error: false,
    message: '',
}

export default function page() {

    const [state, clientAction] = useFormState(addSeed, initialState);
    return (
        <div>
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


        </div>
    )
}
