"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

interface ChildrenProps {
  children: React.ReactNode;
}
const Layout = ({ children }: ChildrenProps) => {
  const [qc] = useState(() => new QueryClient());
  return (
    <div className="layout">
      <QueryClientProvider client={qc}>
        <Header />
        <main>{children}</main>
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default Layout;
