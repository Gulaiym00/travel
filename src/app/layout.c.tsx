import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}
const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer /git
    </div>
  );
};

export default Layout;
