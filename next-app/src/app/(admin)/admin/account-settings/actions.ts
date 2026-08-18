"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function updateUserAccount(formData: FormData) {
  const user = await prisma.users.findFirst({
    orderBy: { id: 'asc' }
  });

  if (!user) {
    throw new Error("No admin user found in database.");
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const image = formData.get("image") as File;

  const updateData: any = {};
  if (name) updateData.name = name;
  if (email) updateData.email = email;

  if (password && password.trim() !== "") {
    updateData.password = await bcrypt.hash(password, 10);
  }

  if (image && image.size > 0) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique filename
    const filename = `admin-${Date.now()}${path.extname(image.name)}`;
    const uploadDir = path.join(process.cwd(), "public/images/users");
    
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {}

    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);
    updateData.image_path = `/images/users/${filename}`;
  }

  await prisma.users.update({
    where: { id: user.id },
    data: updateData,
  });

  revalidatePath("/admin/account-settings");
}
