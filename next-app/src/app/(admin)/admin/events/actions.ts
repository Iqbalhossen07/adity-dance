"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createEvent(data: FormData) {
  try {
    const title = data.get("title") as string;
    const description = data.get("description") as string;
    const event_date = new Date(data.get("event_date") as string);
    const location = data.get("location") as string;
    const ticket_link = data.get("ticket_link") as string;
    const image_path = data.get("image_path") as string;
    const is_published = data.get("is_published") === "true";

    await prisma.events.create({
      data: {
        title,
        description,
        event_date,
        location,
        ticket_link,
        image_path,
        is_published,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    revalidatePath("/admin/events");
    revalidatePath("/");
    revalidatePath("/events");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to create event:", error);
    return { success: false, error: "Failed to create event." };
  }
}

export async function updateEvent(id: number, data: FormData) {
  try {
    const title = data.get("title") as string;
    const description = data.get("description") as string;
    const event_date = new Date(data.get("event_date") as string);
    const location = data.get("location") as string;
    const ticket_link = data.get("ticket_link") as string;
    const image_path = data.get("image_path") as string;
    const is_published = data.get("is_published") === "true";

    await prisma.events.update({
      where: { id: BigInt(id) },
      data: {
        title,
        description,
        event_date,
        location,
        ticket_link,
        image_path,
        is_published,
        updated_at: new Date(),
      },
    });

    revalidatePath("/admin/events");
    revalidatePath("/");
    revalidatePath("/events");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to update event:", error);
    return { success: false, error: "Failed to update event." };
  }
}

export async function deleteEvent(id: number) {
  try {
    await prisma.events.delete({
      where: { id: BigInt(id) },
    });

    revalidatePath("/admin/events");
    revalidatePath("/");
    revalidatePath("/events");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to delete event:", error);
    return { success: false, error: "Failed to delete event." };
  }
}
