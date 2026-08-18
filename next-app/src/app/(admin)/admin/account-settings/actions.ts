"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export async function updateUserAccount(data: { name: string; email: string; password?: string }) {
  const user = await prisma.users.findFirst({
    orderBy: { id: 'asc' }
  });

  if (!user) {
    throw new Error("No admin user found in database.");
  }

  const updateData: any = {
    name: data.name,
    email: data.email,
  };

  if (data.password && data.password.trim() !== "") {
    updateData.password = await bcrypt.hash(data.password, 10);
  }

  await prisma.users.update({
    where: { id: user.id },
    data: updateData,
  });

  revalidatePath("/admin/account-settings");
}
