"use server";

import { DateTime } from "next-auth/providers/kakao";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

// interface addSeedParams {
// 	seedName: string;
// 	seedSeason: string;
// 	seedDate: DateTime;
// 	state: string;
// 	landType: string;
// 	garde: string;
// }

export async function addSeed(_: any, formData: FormData): Promise<any> {
	try {
		await prisma.seedInfo.create({
			data: {
				seedName: formData.get("seedName") as string,
				seedSeason: formData.get("seedSeason") as string,
				seedDate: formData.get("seedDate") as string,
				state: formData.get("state") as string,
				landType: formData.get("landType") as string,
				garde: formData.get("garde") as string,
			},
		});
		revalidatePath("(protected)/admin");
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

export async function fetchSeed(_: any, formData: FormData): Promise<any> {
	const seedId = formData.get("seedId") as string;
	try {
		const foundSeed = await prisma.seedInfo.findUnique({
			where: {
				id: seedId,
			},
		});

		return JSON.parse(JSON.stringify(foundSeed));
	} catch (e: any) {
		return JSON.stringify({
			error: true,
			msg: e.message,
		});
	}
}

export async function fetchSeeds(): Promise<any> {
	try {
		const foundSeed = await prisma.seedInfo.findMany();
		return JSON.parse(JSON.stringify(foundSeed));
	} catch (e: any) {
		return JSON.stringify({
			error: true,
			msg: e.message,
		});
	}
}

export async function deleteSeed(_: any, formData: FormData): Promise<any> {
	const seedId = formData.get("seedId") as string;
	try {
		await prisma.seedInfo.delete({
			where: {
				id: seedId,
			},
		});
		revalidatePath("(protected)/admin");
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

export async function updateSeed(_: any, formData: FormData): Promise<any> {
	const seedId = formData.get("seedId") as string;
	try {
		const updatedSeed = await prisma.seedInfo.update({
			where: {
				id: seedId,
			},
			data: {
				seedName: formData.get("seedName") as string,
				seedSeason: formData.get("seedSeason") as string,
				seedDate: formData.get("seedDate") as string,
				state: formData.get("state") as string,
				landType: formData.get("landType") as string,
				garde: formData.get("garde") as string,
			},
		});
		revalidatePath("(protected)/admin");
		return JSON.stringify({
			error: false,
			msg: "Inventory updated successfully",
			updatedSeed: updatedSeed,
		});
	} catch (e: any) {
		return JSON.stringify({
			error: true,
			msg: e.message,
		});
	}
}
