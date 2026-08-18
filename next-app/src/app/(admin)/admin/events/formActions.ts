"use server";

import { prisma } from "@/lib/prisma";

export async function saveEvent(formData: FormData) {
  const id = formData.get("id") as string | null;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const event_date = new Date(formData.get("event_date") as string);
  const location = formData.get("location") as string;
  const ticket_link = formData.get("ticket_link") as string;
  const is_published = formData.get("is_published") === "1";

  const data = {
    title,
    description,
    event_date,
    location,
    ticket_link,
    is_published,
  };

  if (id) {
    await prisma.events.update({
      where: { id: BigInt(id) },
      data,
    });
  } else {
    await prisma.events.create({
      data,
    });
  }
}
