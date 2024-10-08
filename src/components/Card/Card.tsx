import { clampText } from "../../utils";
import { Pill } from "../Pill/Pill";
import s from "./Card.module.css";

interface Props {
  img: string;
  name: string;
  headerRight: string;
  description: string;
  category: string;
}

export const Card = ({
  img,
  name,
  headerRight,
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
            <span className={s["header-right"]}> {headerRight}</span>
          </span>
        </header>
        <p>{clampText(description)}</p>
        <footer className={s["footer"]}>
          <Pill>{category}</Pill>
        </footer>
      </div>
    </article>
  );
};
