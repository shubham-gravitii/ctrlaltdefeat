"use server";

import { DateTime } from "next-auth/providers/kakao";
import { prisma } from "../prisma";

interface addSeedParams {
	seedName: string;
    seedSeason: string;
	seedDate:   DateTime;
    state:      string;
    landType:   string;
    garde:      string
}

export async function addSeed({
    seedName,
    seedSeason,
	seedDate,
    state,
    landType,
    garde
}: addSeedParams): Promise<any> {
    try {
        await prisma.seedInfo.create({
            data: {
               seedName,
               seedSeason,
	           seedDate,
               state,
               landType,
               garde
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



export async function fetchSeed({ seedId }: { seedId: string }) {
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

export async function deleteSeed({ seedId}: {seedId: string}){
    try {
        await prisma.seedInfo.delete({
            where: {
                id: seedId
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

export async function updateSeed({ seedId,data}: {seedId: string,data: string}){
    try {
        const updatedSeed = await prisma.seedInfo.update({
            where: {
                id: seedId
            },
            data:{
                garde: data
            }
        });

        return JSON.stringify({
            error: false,
            msg: "Inventory updated successfully",
            updatedSeed: updatedSeed
        });
        
    } catch (e: any) {
        return JSON.stringify({
            error: true,
            msg: e.message,
        });
    }
}
