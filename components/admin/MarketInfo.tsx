import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddMarketInfoForm, ModifyMarketInfo } from "./MarketInfoHelper";
import { fetchMarkets } from "@/lib/actions/market.action";

export default async function MarketInfo() {
    // fetch market info
    const datas: any[] = await fetchMarkets();
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
                        <TabsTrigger value="home">Market</TabsTrigger>
                        <TabsTrigger value="add-event">Add Market</TabsTrigger>
                    </TabsList>
                </CardHeader>
                <CardContent className="space-y-2">
                    <TabsContent value="home"><ModifyMarketInfo datas={datas} /></TabsContent>
                    <TabsContent value="add-event"><AddMarketInfoForm /></TabsContent>
                </CardContent>
            </Tabs>
        </Card >
    )
}
