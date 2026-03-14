import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const [totalCount, latest] = await Promise.all([
      prisma.message.count(),
      prisma.message.findFirst({
        orderBy: { createdAt: "desc" },
      }),
    ]);

    return NextResponse.json({
      ok: true,
      totalCount,
      latestMessage: latest?.message ?? null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Database check failed",
      },
      { status: 500 }
    );
  }
}
