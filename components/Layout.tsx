import React from "react";

import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative w-screen h-screen">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
