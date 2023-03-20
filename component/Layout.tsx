import React from "react";
import Footer from "./footer";
import Header from "./header";
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarComponent from "./SidebarComponent";

export default function Layout({ children }: any) {
  const styles: any = {
    display: "flex",
    flexDirection: "row",
  };
  return (
    <>
      <ProSidebarProvider>
        <Header />
        <main style={styles} className="main">
          <SidebarComponent />
          {children}
        </main>
        <Footer />
      </ProSidebarProvider>
    </>
  );
}
