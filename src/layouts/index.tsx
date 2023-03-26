import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout = (props: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className="layout">
        <SideNav />
        <div className="contentsSection">{props.children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
