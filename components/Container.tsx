import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-auto">
      {children}
    </div>
  );
};

export default Container;
