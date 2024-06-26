"use client";

import { useAuth } from "@/redux/auth";
import { redirect } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isAuth = useAuth();

  if (!isAuth) {
    redirect('/login');
  }

  return <>{children}</>;
};

export default DashboardLayout;
