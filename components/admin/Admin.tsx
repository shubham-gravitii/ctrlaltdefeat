import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Home from "./Home";
import ModifyUsers from "./ModifyUsers";
import ToolsInfo from "./ToolsInfo";
import SeedsInfo from "./SeedsInfo";
import MarketInfo from "./MarketInfo";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function LeaderBoardUpload() {
    return (
        <main className="flex justify-center m-auto items-center my-10">
            <MaxWidthWrapper>
                <Tabs defaultValue="home">
                    <div className="scale-125 text-center my-4">
                        <TabsList>
                            <TabsTrigger value="home">Home</TabsTrigger>
                            <TabsTrigger value="tools">Tools Info</TabsTrigger>
                            <TabsTrigger value="seeds">Seed Info</TabsTrigger>
                            <TabsTrigger value="market">Market Info</TabsTrigger>
                            <TabsTrigger value="users">Modify Users</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="home"><Home /></TabsContent>
                    <TabsContent value="tools"><ToolsInfo /></TabsContent>
                    <TabsContent value="seeds"> <SeedsInfo /></TabsContent>
                    <TabsContent value="market"><MarketInfo /></TabsContent>
                    <TabsContent value="users"><ModifyUsers /></TabsContent>
                </Tabs>
            </MaxWidthWrapper>
        </main>
    )
}
