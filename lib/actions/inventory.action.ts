"use server";

import { DateTime } from "next-auth/providers/kakao";
import { prisma } from "../prisma";
import { InventoryType } from "@prisma/client";
import { revalidatePath } from "next/cache";

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
        console.log(inventoryId)
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

export async function updateInventory(_: any, formData: FormData): Promise<any>{
    try {
        await prisma.inventory.create({
			data: {
				name: formData.get("name") as string,
				type: formData.get("type") as InventoryType,
				expiery: formData.get("expiry") as string,
				url: "http/image.png",
                
			},
		});
		revalidatePath("(protected)/admin");

        return JSON.stringify({
            error: false,
            msg: "Inventory updated successfully",
        });
        
    } catch (e: any) {
        return JSON.stringify({
            error: true,
            msg: e.message,
        });
    }
}


