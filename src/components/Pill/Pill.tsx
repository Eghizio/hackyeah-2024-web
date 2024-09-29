import s from "./Pill.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Pill = ({ children }: Props) => {
  return <span className={s["pill"]}>{children}</span>;
};
