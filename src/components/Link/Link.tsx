import { ReactNode } from "react";
import s from "./Link.module.css";
import { StyleVariant } from "../../types";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  variant?: StyleVariant;
}

export const Link = ({ children, onClick, variant = "primary" }: Props) => {
  return (
    <span className={`${s.link} ${s[variant]}`} onClick={onClick}>
      {children}
    </span>
  );
};
