import { NextResponse } from "next/server";
import ConnectDB from "../../../../lib/config/db";

const LoadDB = async () => {
    await ConnectDB();
};

LoadDB();

export const GET = async () => {
    try {
        return NextResponse.json({ msg: "Api working properly" })
    } catch (error) {
        console.log((error as Error).message, 'error')
    }
}