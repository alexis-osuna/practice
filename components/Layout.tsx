import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {children}
      <Nav />
      <Footer />
    </div>
  );
};

export default Layout;
