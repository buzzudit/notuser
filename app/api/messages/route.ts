import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  const body = (await request.json()) as { message?: string };
  const message = body.message?.trim();

  if (!message) {
    return NextResponse.json(
      { ok: false, error: "message is required" },
      { status: 400 }
    );
  }

  const created = await prisma.message.create({
    data: { message },
  });

  return NextResponse.json(created, { status: 201 });
}
