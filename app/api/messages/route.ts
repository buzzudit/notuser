import { NextResponse } from "next/server";
import { createMessage, listMessages } from "@/lib/site/messageStore";

export async function GET() {
  try {
    const messages = await listMessages();
    return NextResponse.json(messages);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Messages are currently unavailable." },
      { status: 503 },
    );
  }
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

  try {
    const created = await createMessage(message);
    return NextResponse.json(created, { status: 201 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Message storage is currently unavailable." },
      { status: 503 },
    );
  }
}
