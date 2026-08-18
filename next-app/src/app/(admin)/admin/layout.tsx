import { prisma } from "@/lib/prisma";
import AdminClientLayout from "./AdminClientLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Studio | Adity Dance CIC",
};

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
