import { prisma } from "@/lib/prisma";
import AdminClientLayout from "./AdminClientLayout";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await prisma.users.findFirst({ orderBy: { id: 'asc' } });

  return (
    <AdminClientLayout user={user}>
      {children}
    </AdminClientLayout>
  );
}
