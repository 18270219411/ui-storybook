// packages/Button/index.tsx
import React from "react";

import "./index.less";

export interface IButtonProps {
  label?: string;

  onClick?(): void;
}

const Button = ({ label, onClick }: IButtonProps) => {
  return (
    <div className="kf-pixui-button">
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

export default Button;
