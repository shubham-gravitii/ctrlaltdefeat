"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../prisma";

// interface addMarketParams {
// 	cropName: string;
// 	price: number;
// 	quantity: number;
// }

export async function addMarket(_: any, formData: FormData): Promise<any> {
	try {
		await prisma.marketInfo.create({
			data: {
				cropName: formData.get("cropName") as string,
				price: Number(formData.get("price")),
				quantity: Number(formData.get("quantity")),
			},
		});

		revalidatePath("/admin/market");
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

export async function fetchMarket(_: any, formData: FormData): Promise<any> {
	const marketId = formData.get("marketId") as string;
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

export async function fetchMarkets(): Promise<any> {
	try {
		const foundMarket = await prisma.marketInfo.findMany();

		return JSON.parse(JSON.stringify(foundMarket));
	} catch (e: any) {
		return JSON.stringify({
			error: true,
			msg: e.message,
		});
	}
}

export async function deleteMarket(_: any, formData: FormData): Promise<any> {
	const marketId = formData.get("marketId") as string;
	try {
		await prisma.marketInfo.delete({
			where: {
				id: marketId,
			},
		});
		revalidatePath("/admin/market");
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

export async function updateMarket(_: any, formData: FormData): Promise<any> {
	const marketId = formData.get("marketId") as string;
	try {
		const updatedMarket = await prisma.marketInfo.update({
			where: {
				id: marketId,
			},
			data: {
				price: Number(formData.get("price")),
				quantity: Number(formData.get("quantity")),
			},
		});
		revalidatePath("/admin/market");
		return JSON.stringify({
			error: false,
			msg: "Inventory updated successfully",
			updatedMarket: updatedMarket,
		});
	} catch (e: any) {
		return JSON.stringify({
			error: true,
			msg: e.message,
		});
	}
}
