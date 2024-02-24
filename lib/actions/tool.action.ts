"use server";

import { prisma } from "../prisma";

interface addToolParams {
	toolName:  string
  toolType:  string
  toolPrice: number
  uses:      string
}

export async function addTool({
    toolName,
  toolType,
  toolPrice,
  uses
}: addToolParams): Promise<any> {
    try {
        await prisma.toolInfo.create({
            data: {
                toolName,
                toolType,
                toolPrice,
                uses
            },
        });
        return JSON.stringify({
            error: false,
            msg: "success",
        });
    } catch (e: any) {
        return JSON.stringify({
            error: true,
            msg: e.message,
        });
    }
}



export async function fetchTool({ toolId }: { toolId: string }) {
    try {
        const foundTool = await prisma.toolInfo.findUnique({
            where: {
                id: toolId,
            },
        });

        return JSON.parse(JSON.stringify(foundTool));
    } catch (e: any) {
        return JSON.stringify({
            error: true,
            msg: e.message,
        });
    }
}

export async function deleteTool({ toolId}: {toolId: string}){
    try {
        await prisma.toolInfo.delete({
            where: {
                id: toolId
            }
        });
        
        return JSON.stringify({
            error: false,
            msg: "Inventory deleted successfully",
        });
        
    } catch (e: any) {
        return JSON.stringify({
            error: true,
            msg: e.message,
        });
    }
}

export async function updateTool({ toolId,data}: {toolId: string,data: number}){
    try {
        const updatedTool = await prisma.toolInfo.update({
            where: {
                id: toolId
            },
            data:{
                toolPrice: data
            }
        });

        return JSON.stringify({
            error: false,
            msg: "Inventory updated successfully",
            updatedTool: updatedTool
        });
        
    } catch (e: any) {
        return JSON.stringify({
            error: true,
            msg: e.message,
        });
    }
}
