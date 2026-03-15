import { promises as fs } from "fs";
import path from "path";
import prisma from "@/lib/prisma";

type MessageRecord = {
  id: number;
  message: string;
  createdAt: string;
};

const PREVIEW_DATA_DIR = path.join(process.cwd(), ".preview-data");
const PREVIEW_MESSAGES_FILE = path.join(PREVIEW_DATA_DIR, "messages.json");

function shouldUsePreviewStore() {
  const databaseUrl = process.env.DATABASE_URL ?? "";
  const usesRailwayInternalHost = databaseUrl.includes("railway.internal");
  const isRailwayRuntime = Boolean(
    process.env.RAILWAY_PROJECT_ID ||
      process.env.RAILWAY_ENVIRONMENT_ID ||
      process.env.RAILWAY_ENVIRONMENT ||
      process.env.RAILWAY_STATIC_URL,
  );

  return usesRailwayInternalHost && !isRailwayRuntime;
}

async function readPreviewMessages() {
  try {
    const raw = await fs.readFile(PREVIEW_MESSAGES_FILE, "utf8");
    const parsed = JSON.parse(raw) as MessageRecord[];
    return parsed;
  } catch (error) {
    const isMissingFile =
      error instanceof Error &&
      "code" in error &&
      error.code === "ENOENT";

    if (isMissingFile) {
      return [];
    }

    throw error;
  }
}

async function writePreviewMessages(messages: MessageRecord[]) {
  await fs.mkdir(PREVIEW_DATA_DIR, { recursive: true });
  await fs.writeFile(PREVIEW_MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf8");
}

export async function listMessages() {
  if (shouldUsePreviewStore()) {
    const messages = await readPreviewMessages();
    return messages
      .slice()
      .sort((left, right) => right.createdAt.localeCompare(left.createdAt))
      .slice(0, 20);
  }

  return prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
  });
}

export async function createMessage(message: string) {
  if (shouldUsePreviewStore()) {
    const messages = await readPreviewMessages();
    const nextId = messages.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
    const created: MessageRecord = {
      id: nextId,
      message,
      createdAt: new Date().toISOString(),
    };

    await writePreviewMessages([created, ...messages]);
    return created;
  }

  return prisma.message.create({
    data: { message },
  });
}
