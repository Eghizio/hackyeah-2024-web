import { ReactNode } from "react";
import s from "./List.module.css";

interface Props {
  children: ReactNode;
}

export const List = ({ children }: Props) => (
  <ul className={s["list"]}>{children}</ul>
);

List.Item = ({ children }: Props) => (
  <li className={s["list-item"]}>{children}</li>
);
