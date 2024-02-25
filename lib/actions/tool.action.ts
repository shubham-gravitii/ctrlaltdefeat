"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../prisma";

interface addToolParams {
	toolName: string;
	toolType: string;
	toolPrice: number;
	uses: string;
}

export async function addTool(_: any, formData: FormData): Promise<any> {
	try {
		await prisma.toolInfo.create({
			data: {
				toolName: formData.get("toolName") as string,
				toolType: formData.get("toolType") as string,
				toolPrice: parseInt(formData.get("toolPrice") as string),
				uses: formData.get("uses") as string,
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

export async function fetchTools() {
	try {
		const foundTool = await prisma.toolInfo.findMany();

		return JSON.parse(JSON.stringify(foundTool));
	} catch (e: any) {
		return JSON.stringify({
			error: true,
			msg: e.message,
		});
	}
}

export async function deleteTool(_: any, formData: FormData): Promise<any> {
	const toolId = formData.get("toolId") as string;
	try {
		await prisma.toolInfo.delete({
			where: {
				id: toolId,
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

export async function updateTool(_: any, formData: FormData): Promise<any> {
	const toolId = formData.get("toolId") as string;

	try {
		const updatedTool = await prisma.toolInfo.update({
			where: {
				id: toolId,
			},
			data: {
				toolName: formData.get("toolName") as string,
				toolType: formData.get("toolType") as string,
				toolPrice: parseInt(formData.get("toolPrice") as string),
				uses: formData.get("uses") as string,
			},
		});

		revalidatePath("(protected)/admin");
		return JSON.stringify({
			error: false,
			msg: "Inventory updated successfully",
			updatedTool: updatedTool,
		});
	} catch (e: any) {
		return JSON.stringify({
			error: true,
			msg: e.message,
		});
	}
}
