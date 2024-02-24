import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BiTrash } from "react-icons/bi";


export default async function ModifyEvents() {
    const events: any = [{ id: 1, title: "Event 1", dateTime: "2022-12-12T12:00:00Z", mode: "Online" }];

    const rows = events.map((event: any) => (
        <TableRow key={event.id}>
            <TableCell>{1010101}</TableCell>
            <TableCell>{event.title.substring(0, 50)} {event.title.split("").length > 50 && "..."}</TableCell>
            <TableCell>{new Date(event.dateTime) > new Date() ? <Badge variant='default'>Ongoing</Badge> : <Badge variant='destructive'>Expired</Badge>}</TableCell>
            <TableCell>{event.mode}</TableCell>
            <TableCell><BiTrash id={event.id} /></TableCell>
        </TableRow>
    ));

    return (
        <Table>
            <TableCaption>A list of GDSC Events.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Mode</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows}
            </TableBody>
        </Table>
    )
}
