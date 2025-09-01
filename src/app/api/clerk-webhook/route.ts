/* eslint-disable */
import { Webhook } from "svix";
import { headers } from "next/headers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  // Get JSON payload
  const payload = await req.json();

  // Next.js headers() – no await
  const headersList = headers();

  // Grab Clerk headers safely
  const svix_id = headersList.get("svix-id") || "";
  const svix_timestamp = headersList.get("svix-timestamp") || "";
  const svix_signature = headersList.get("svix-signature") || "";

  // Verify webhook with Svix
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let evt;
  try {
    evt = wh.verify(JSON.stringify(payload), {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  // Handle Clerk events
  if (evt.type === "user.created") {
    const { id, email_addresses } = evt.data as any;
    const email = email_addresses?.[0]?.email_address;

    if (email) {
      await prisma.admin.create({
        data: { clerkId: id, email },
      });
    }
  }

  return new Response("ok", { status: 200 });
}
