"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";



export default function AddKpiForm({ kpiType }: { kpiType: string }) {

    function submitInvite(formData: FormData) {

        const newKpi = {
            name: formData.get("name"),
            email: formData.get("yaxis"),
        }
        // console.log(newKpi);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Custom {kpiType}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Custom {kpiType}</DialogTitle>
                    <DialogDescription>
                        Fill and Click send when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <form action={submitInvite} className="grid gap-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="yaxis" className="text-right">
                            Y-Axis
                        </Label>
                        <Input
                            id="yaxis"
                            name="yaxis"
                            className="col-span-3"
                        />
                    </div>
                    <div className="flex justify-between">
                        <DialogTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogTrigger>
                        <Button type="submit">Send</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
