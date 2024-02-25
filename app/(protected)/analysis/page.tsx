"use client"
import { Input } from "@/components/ui/input";
import { useFormState } from 'react-dom';
import MyButton from "@/components/SubmitButton";
import { BiSolidError } from "react-icons/bi";
import { inventoryAnalysis } from "@/lib/actions/analysis.action";


const initialState = {
    error: false,
    message: '',
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const states = ["Bihar", "Gujarat", "Maharashtra", "Punjab", "Tamil Nadu"]
const landTypes = ["Alluvial soils", "Black soils", "Red soils", "Laterite soils"]


export default function page() {

    const [state, clientAction] = useFormState(inventoryAnalysis, initialState);
    // console.log(state);

    return (
        <div>
            <h1 className="text-4xl my-4 font-extrabold text-center">Welcome to the Analytics Page.</h1>
            <form className="flex max-w-[400px] flex-col gap-6 mt-6 mx-auto" action={clientAction}>

                <section className="w-full">
                    <label htmlFor="seedName">Seed Name:</label>
                    <Input type='text' placeholder="Enter title of Seed" name="seedName" required />
                </section>

                <div className="grid grid-cols-2 gap-6 justify-between">
                    <section className="w-full grid gap-2">
                        <label htmlFor="seedDate">Seed Date:</label>
                        <Input type="date" name='seedDate' required />
                    </section>

                    <section className="w-full grid gap-2">
                        <label htmlFor="state">State:</label>
                        <select name="state" id="state" className="border-2 border-slate-200 rounded-md py-2">
                            {
                                states.map((state, index) => (
                                    <option key={index} value={state}>{state}</option>
                                ))
                            }
                        </select>
                    </section>
                </div>

                <div className="grid grid-cols-2 gap-6 justify-between">
                    <section className="w-full grid gap-2">
                        <label htmlFor="month">Month for Planting:</label>
                        <select name="month" id="month" className="border-2 border-slate-200 rounded-md py-2">
                            {
                                months.map((month, index) => (
                                    <option key={index} value={month}>{month}</option>
                                ))
                            }
                        </select>
                    </section>

                    <section className="w-full grid gap-2">
                        <label htmlFor="landType">Soil Type:</label>
                        <select name="landType" id="landType" className="border-2 border-slate-200 rounded-md py-2">
                            {
                                landTypes.map((landType, index) => (
                                    <option key={index} value={landType}>{landType}</option>
                                ))
                            }
                        </select>
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
