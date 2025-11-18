import React from "react";

interface MainContentProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const MainContent = ({ children, style }: MainContentProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.875rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default MainContent;
