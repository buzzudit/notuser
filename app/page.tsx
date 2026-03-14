import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

type DbState = {
  ok: boolean;
  totalCount: number;
  latestMessage: string;
  error: string | null;
};

async function getDbState(): Promise<DbState> {
  try {
    const [totalCount, latest] = await Promise.all([
      prisma.message.count(),
      prisma.message.findFirst({
        orderBy: { createdAt: "desc" },
      }),
    ]);

    return {
      ok: true,
      totalCount,
      latestMessage: latest?.message ?? "(no records yet)",
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      totalCount: 0,
      latestMessage: "N/A",
      error: error instanceof Error ? error.message : "Unknown database error",
    };
  }
}

async function createMessage(formData: FormData) {
  "use server";

  const messageValue = formData.get("message");
  const message = typeof messageValue === "string" ? messageValue.trim() : "";

  if (!message) return;

  await prisma.message.create({
    data: { message },
  });

  revalidatePath("/");
}

export default async function Home() {
  const dbState = await getDbState();

  return (
    <main className="container">
      <h1>Hello, Udit</h1>
      <p>App is running</p>

      <section className="panel" aria-labelledby="db-section-title">
        <h2 id="db-section-title">Database connectivity</h2>

        {dbState.ok ? (
          <>
            <p>Total row count: {dbState.totalCount}</p>
            <p>Latest record text: {dbState.latestMessage}</p>
          </>
        ) : (
          <p>Database error: {dbState.error}</p>
        )}

        <form action={createMessage} className="form">
          <label htmlFor="message">Insert test record</label>
          <input
            id="message"
            name="message"
            type="text"
            placeholder="Type a message"
            required
          />
          <button type="submit">Add record</button>
        </form>
      </section>
    </main>
  );
}
