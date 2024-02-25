import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddSeedInfoForm, ModifySeedInfo } from './SeedsInfoHelper';
import { fetchSeeds } from '@/lib/actions/seed.action';

export default async function SeedsInfo() {
    // fetch seeds info
    const seeds: any[] = await fetchSeeds();
    return (
        <Card>
            <Tabs defaultValue="home">
                <CardHeader className='flex flex-row justify-between'>
                    <div>
                        <CardTitle className='text-lg md:text-xl'>Events</CardTitle>
                        <CardDescription>
                            Manage events on the website
                        </CardDescription>
                    </div>
                    <TabsList className="flex justify-center">
                        <TabsTrigger value="home">Seeds</TabsTrigger>
                        <TabsTrigger value="add-event">Add Seeds</TabsTrigger>
                    </TabsList>
                </CardHeader>
                <CardContent className="space-y-2">
                    <TabsContent value="home"><ModifySeedInfo seeds={seeds} /></TabsContent>
                    <TabsContent value="add-event"><AddSeedInfoForm /></TabsContent>
                </CardContent>
            </Tabs>
        </Card >
    )
}
