import { ReactNode } from "react";
import s from "./Button.module.css";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  variant: "primary" | "secondary";
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  wide?: boolean;
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  wide = false,
}: Props) => {
  const classes = [s.button, s[variant], wide && s.wide]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
