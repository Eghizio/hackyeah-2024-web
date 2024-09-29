import s from "./NotFound.module.css";
import { NavLink } from "react-router-dom";

interface Props {}

export const NotFound = ({}: Props) => {
  return (
    <main className={s["center"]}>
      <h1 className={s["not-found"]}>Strona nie znaleziona</h1>
      <NavLink to="/" className={s["link"]}>
        Wróć do strony głównej
      </NavLink>
    </main>
  );
};
