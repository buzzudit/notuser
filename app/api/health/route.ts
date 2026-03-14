import { NextResponse } from "next/server";

const appName = process.env.APP_NAME ?? "notuser";

export async function GET() {
  return NextResponse.json({
    ok: true,
    appName,
    environment: process.env.NODE_ENV ?? "development",
  });
}
