import { Webhook } from "svix";
import { headers } from "next/headers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const payload = await req.json();
  const headersList = headers();

  const svix_id = headersList.get("svix-id");
  const svix_timestamp = headersList.get("svix-timestamp");
  const svix_signature = headersList.get("svix-signature");

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let evt: any;
  try {
    evt = wh.verify(JSON.stringify(payload), {
      "svix-id": svix_id!,
      "svix-timestamp": svix_timestamp!,
      "svix-signature": svix_signature!,
    });
  } catch (err) {
    return new Response("Invalid signature", { status: 400 });
  }

  if (evt.type === "user.created") {
    const { id, email_addresses } = evt.data;
    const email = email_addresses[0].email_address;

    // Save in Admin DB
    await prisma.admin.create({
      data: { clerkId: id, email },
    });
  }

  return new Response("ok", { status: 200 });
}
