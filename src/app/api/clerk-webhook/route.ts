import { Webhook } from "svix";
import { headers } from "next/headers";
import { PrismaClient } from "@prisma/client";

// Direct Prisma client (⚠️ watch for connection limits in serverless)
const prisma = new PrismaClient();

// Define Clerk event type (simplified for user.created)
interface ClerkUserCreatedEvent {
  type: "user.created";
  data: {
    id: string;
    email_addresses: { email_address: string }[];
  };
}

export async function POST(req: Request) {
  const payload = await req.json();

  // ✅ headers() is synchronous
  const rawHeaders = headers();
  const headerPayload: Record<string, string> = {};
  (await rawHeaders).forEach((value, key) => {
    headerPayload[key] = value;
  });

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || "");
  let evt: ClerkUserCreatedEvent;

  try {
    evt = wh.verify(JSON.stringify(payload), headerPayload) as ClerkUserCreatedEvent;
  } catch (err) {
    console.error("❌ Webhook verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  if (evt.type === "user.created") {
    const { id, email_addresses } = evt.data;
    const email = email_addresses?.[0]?.email_address;

    if (!email) {
      console.error("❌ No email found in Clerk event");
      return new Response("Missing email", { status: 400 });
    }

    try {
      await prisma.admin.create({
        data: {
          clerkId: id,
          email,
          // role will default to "admin" from schema
        },
      });
      console.log("✅ Admin inserted into DB:", { id, email });
    } catch (e) {
      console.error("❌ Prisma insert into Admin failed:", e);
      return new Response("Database error", { status: 500 });
    }
  }

  return new Response("ok", { status: 200 });
}
