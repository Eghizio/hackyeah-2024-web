import s from "./List.module.css";
import { List } from "./List";
import { Project } from "../../types";
import { Card } from "../Card/Card";

interface Props {
  projects: Project[];
}

export const ProjectsList = ({ projects }: Props) => {
  return (
    <article className={s["list-wrapper"]}>
      <h2>Projects</h2>
      <List>
        {projects.map(({ photo, title, ID, abstract, category }, i) => (
          <List.Item key={i}>
            <Card
              img={photo}
              name={title}
              headerRight={"#" + ID.toString()}
              description={abstract}
              category={category}
            />
          </List.Item>
        ))}
      </List>
    </article>
  );
};
