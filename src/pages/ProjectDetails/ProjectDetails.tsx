import s from "./ProjectDetails.module.css";
import { useLocation } from "react-router-dom";
import { Project } from "../../types";
import { Pill } from "../../components/Pill/Pill";
import { Button } from "../../components/Button/Button";

interface Props {}

export const ProjectDetails = ({}: Props) => {
  const location = useLocation();
  const {
    ID,
    title,
    user_name,
    category,
    photo,
    abstract,
    detailed_desc,
    cost,
    gathered_money,
    funded_money,
  }: Project = location.state;

  return (
    <main className={s["project-details"]}>
      <h1>
        {title} <span>#{ID}</span>
      </h1>
      <div className={s["project-info"]}>
        <span>Opiekun projektu: {user_name}</span>
        <Pill>{category}</Pill>
      </div>

      <table className="money">
        <tbody>
          <tr>
            <td>
              <p>{cost}</p>
              <p>Kwota potrzebna do realizacji</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{gathered_money}</p>
              <p>Kwota zebrana przez obywateli</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{funded_money}</p>
              <p>Kwota z funduszu</p>
            </td>
          </tr>
        </tbody>
      </table>

      <img src={photo} />

      <section>
        <h2 className={s["title"]}>Abstrakt</h2>
        <p className={s["text"]}>{abstract}</p>
      </section>

      <section>
        <h2 className={s["title"]}>Szczegóły</h2>
        <p className={s["text"]}>{detailed_desc}</p>
      </section>

      <section className={s["cta"]}>
        <Button variant="primary">Finansuj ten projekt</Button>
        <Button variant="secondary">Zagłosuj na ten projekt</Button>
      </section>

      <section>
        <h3 className={s["title"]}>Komentarze</h3>
      </section>
    </main>
  );
};
