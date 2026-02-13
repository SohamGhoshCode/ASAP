import { db } from "@/config/db";
import { chatTable, frameTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const frameId = searchParams.get("frameId");
    const projectId = searchParams.get("projectId");

    if (!frameId || !projectId) {
        return NextResponse.json(
            { error: "Missing frameId or projectId" },
            { status: 400 }
        );
    }

    try {
        // Get frame details
        const frameResult = await db
            .select()
            .from(frameTable)
            .where(eq(frameTable.frameId, frameId));

        if (frameResult.length === 0) {
            return NextResponse.json(
                { error: "Frame not found" },
                { status: 404 }
            );
        }

        // Get all chats
        const chatRows = await db
            .select()
            .from(chatTable)
            .where(eq(chatTable.frameId, frameId));

        // Extract only the chatMessage JSON object from each row
        const chatMessages = chatRows.map(row => row.chatMessage);

        const finalResult = {
            ...frameResult[0],
            chatMessages
        };

        return NextResponse.json(finalResult);

    } catch (error) {
        console.error("Frame API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
