"use server";

import { DateTime } from "next-auth/providers/kakao";
import { prisma } from "../prisma";
import { InventoryType } from "@prisma/client";

interface addInventoryParams {
	name: string;
	expiery: DateTime;
    url: string;
    type:     InventoryType;
    createdById: string;
}

export async function addInventory({
    name,
    expiery,
    url,
    type,
    createdById,
}: addInventoryParams): Promise<any> {
    try {
        await prisma.inventory.create({
            data: {
                name,
                expiery,
                url,
                type,
                createdById,
                createdAt: new Date(),
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

export async function fetchInventory() {
    try {
        const foundInventory = await prisma.inventory.findMany();

        return JSON.parse(JSON.stringify(foundInventory));
    } catch (e: any) {
        return JSON.stringify({
            error: true,
            msg: e.message,
        });
    }
}

export async function fetchUniqueInventory({ inventoryId }: { inventoryId: string }) {
    try {
        const foundInventory = await prisma.inventory.findUnique({
            where: {
                id: inventoryId,
            },
        });

        return JSON.parse(JSON.stringify(foundInventory));
    } catch (e: any) {
        return JSON.stringify({
            error: true,
            msg: e.message,
        });
    }
}

export async function deleteInventory({ inventoryId}: {inventoryId: string}){
    try {
        await prisma.inventory.delete({
            where: {
                id: inventoryId
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

export async function updateInventory({ inventoryId,data}: {inventoryId: string,data: DateTime}){
    try {
        const updatedInventory = await prisma.inventory.update({
            where: {
                id: inventoryId
            },
            data:{
            expiery: data
            }
        });

        return JSON.stringify({
            error: false,
            msg: "Inventory updated successfully",
            updatedInventory: updatedInventory
        });
        
    } catch (e: any) {
        return JSON.stringify({
            error: true,
            msg: e.message,
        });
    }
}


