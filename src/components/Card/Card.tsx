import { ReactNode } from "react";
import { Pill } from "../Pill/Pill";
import s from "./Card.module.css";

interface Props {
  img: string;
  name: string;
  displayId: string;
  description: string;
  category: string;
}

export const Card = ({
  img,
  name,
  displayId,
  description,
  category,
}: Props) => {
  return (
    <article className={s["card"]}>
      <img className={s["thumbnail"]} src={img} alt="Project image" />
      <div className={s["card-body"]}>
        <header className={s["header"]}>
          <span className={s["header-left"]}>
            {name}
            <span className={s["header-right"]}> #{displayId}</span>
          </span>
        </header>
        <p>{description}</p>
        <footer className={s["footer"]}>
          <Pill>{category}</Pill>
        </footer>
      </div>
    </article>
  );
};
