"use server";

import { prisma } from "../prisma";

export async function inventoryAnalysis(
	_: any,
	formData: FormData
): Promise<any> {
	try {
		// await prisma.inventory.update({
		// 	where: {
		// 		id: formData.get("inventoryId") as string,
		// 	}
		// });

		return JSON.stringify({
			error: false,
			msg: "Inventory updated successfully",
			date: "data",
		});
	} catch (e: any) {
		return JSON.stringify({
			error: true,
			msg: e.message,
		});
	}
}
