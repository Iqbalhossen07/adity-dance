import { prisma } from "@/lib/prisma";
import AccountSettingsClient from "./AccountSettingsClient";

export default async function AccountSettingsPage() {
  const user = await prisma.users.findFirst({
    orderBy: { id: 'asc' }
  });

  return (
    <AccountSettingsClient 
      user={user ? { name: user.name, email: user.email, image_path: user.image_path } : null} 
    />
  );
}
