import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AddToolInfoForm, ModifyToolInfo } from "./ToolsInfoHelper";
import { fetchTools } from "@/lib/actions/tool.action";



export default async function ToolsInfo() {
    // fetch tools info
    const tools: any[] = await fetchTools();

    return (
        <Card>
            <Tabs defaultValue="home">
                <CardHeader className='flex flex-row justify-between'>
                    <div>
                        <CardTitle className='text-lg md:text-xl'>Tool Information</CardTitle>
                        <CardDescription>
                            Manage Tool Information on the website
                        </CardDescription>
                    </div>
                    <TabsList className="flex justify-center">
                        <TabsTrigger value="home">Tools</TabsTrigger>
                        <TabsTrigger value="add-event">Add Tools</TabsTrigger>
                    </TabsList>
                </CardHeader>
                <CardContent className="space-y-2">
                    <TabsContent value="home"><ModifyToolInfo tools={tools} /></TabsContent>
                    <TabsContent value="add-event"><AddToolInfoForm /></TabsContent>
                </CardContent>
            </Tabs>
        </Card >
    )
}
