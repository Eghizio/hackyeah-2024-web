import s from "./List.module.css";
import { List } from "./List";
import { Card } from "../Card/Card";
import { useAllProjectsQuery } from "../../api/queries/projects";
import { Spinner } from "../Spinner/Spinner";

interface Props {}

export const ProjectsList = ({}: Props) => {
  const { data: projects, isLoading, isError } = useAllProjectsQuery();

  if (isLoading) return <Spinner />;
  if (isError) return "Error :c";
  return (
    <article className={s["list-wrapper"]}>
      <h2>Projects</h2>
      <List>
        {projects?.length
          ? projects.map(({ photo, title, ID, abstract, category }, i) => (
              <List.Item key={i}>
                <Card
                  img={photo}
                  name={title}
                  headerRight={"#" + ID.toString()}
                  description={abstract}
                  category={category}
                />
              </List.Item>
            ))
          : null}
      </List>
    </article>
  );
};
