"use server";

import { prisma } from "../prisma";

interface addMarketParams {
	cropName: string
  price:    number
  quantity: number
}

export async function addMarket({
    cropName,
  price,
  quantity
}: addMarketParams): Promise<any> {
    try {
        await prisma.marketInfo.create({
            data: {
                cropName,
                price,
                quantity
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



export async function fetchMarket({ marketId }: { marketId: string }) {
    try {
        const foundMarket = await prisma.marketInfo.findUnique({
            where: {
                id: marketId,
            },
        });

        return JSON.parse(JSON.stringify(foundMarket));
    } catch (e: any) {
        return JSON.stringify({
            error: true,
            msg: e.message,
        });
    }
}

export async function deleteMarket({ marketId}: {marketId: string}){
    try {
        await prisma.marketInfo.delete({
            where: {
                id: marketId
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

export async function updateMarket({ marketId,price,quantity}: {marketId: string,price: number,quantity: number}){
    try {
        const updatedMarket = await prisma.marketInfo.update({
            where: {
                id: marketId
            },
            data:{
                price: price,
                quantity: quantity
            }
        });

        return JSON.stringify({
            error: false,
            msg: "Inventory updated successfully",
            updatedMarket: updatedMarket
        });
        
    } catch (e: any) {
        return JSON.stringify({
            error: true,
            msg: e.message,
        });
    }
}
