"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Loading from "@/common/Loading/index";
import { useAppSelector } from "@/redux/store";

const Header = dynamic(() => import("../Header"), { ssr: false });

export function AuthLayout({ children }: { children: React.ReactNode }) {
  const isLoading = useAppSelector((state) => state.loadingReducer.value);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    if (pathname === "/login") {
      router.push("/");
    }
  };

  return (
    <div>
      {pathname !== "/login" && <Header />}
      {children}
      <Loading />
    </div>
  );
}