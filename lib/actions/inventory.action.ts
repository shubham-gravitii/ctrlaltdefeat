"use server";

import { DateTime } from "next-auth/providers/kakao";
import { prisma } from "../prisma";
import { InventoryType } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface addInventoryParams {
	name: string;
	expiery: DateTime;
	url: string;
	type: InventoryType;
    quantity: number;
	createdById: string;
}

export async function addInventory({
	name,
	expiery,
	url,
	type,
    quantity,
	createdById,
}: addInventoryParams): Promise<any> {
	try {
		await prisma.inventory.create({
			data: {
				name,
				expiery,
				url,
				type,
                quantity,
				createdById,
				createdAt: new Date(),
			},
		});
        revalidatePath('(protected)/dashboard')
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

export async function fetchInventory({
    userId,
	InventoryType,
}: {
    userId: string
	InventoryType: InventoryType;
}) {
	try {
		const foundInventory = await prisma.inventory.findMany({
			where: {
                createdById: userId,
				type: InventoryType,
			},
		});

		return JSON.parse(
			JSON.stringify({
				error: false,
				msg: "success",
				data: foundInventory,
			})
		);
	} catch (e: any) {
		return JSON.stringify({
			error: true,
			msg: e.message,
		});
	}
}

export async function fetchUniqueInventory({
	inventoryId,
}: {
	inventoryId: string;
}) {
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

export async function deleteInventory({
	inventoryId,
}: {
	inventoryId: string;
}) {
	try {
		console.log(inventoryId);
		await prisma.inventory.delete({
			where: {
				id: inventoryId,
			},
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

export async function updateInventory(
	_: any,
	formData: FormData
): Promise<any> {
	try {
		await prisma.inventory.update({
			where: {
				id: formData.get("inventoryId") as string,
			},
			data: {
				name: formData.get("name") as string,
				type: formData.get("type") as InventoryType,
				expiery: formData.get("expiry") as DateTime,
				url: "http/image.png",
                quantity: formData.get("quantity") as unknown as number
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