// packages/TextView/index.tsx
import React from "react";
import "./index.less";

export interface ITextViewProps {
  children?: React.ReactNode;
}

const TextView = ({ children }: ITextViewProps) => {
  return <div className="text-view">{children}</div>;
};

export default TextView;
