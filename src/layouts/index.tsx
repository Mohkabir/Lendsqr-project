import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout = (props: LayoutProps) => {
  return (
    <div className="layout">
      <div>{props.children}</div>
    </div>
  );
};

export default MainLayout;
