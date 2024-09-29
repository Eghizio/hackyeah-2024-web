import s from "./List.module.css";
import { List } from "./List";
import { Card } from "../Card/Card";
import { useAllProjectsQuery } from "../../api/queries/projects";
import { Spinner } from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { Project } from "../../types";

interface Props {
  teaser?: boolean;
}

export const ProjectsList = ({ teaser = false }: Props) => {
  const { data, isLoading, isError } = useAllProjectsQuery();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (isError) return "Error :c";

  const projects = data?.length ? data : [];
  const displayedProjects = teaser ? projects.slice(0, 5) : projects;

  const goToDetails = (project: Project) => {
    navigate(`/projects/${project._id}`, { state: project });
  };

  return (
    <article className={s["list-wrapper"]}>
      <h2>Projects</h2>
      <List>
        {displayedProjects.map((project, i) => (
          <List.Item key={i}>
            <div onClick={() => goToDetails(project)}>
              <Card
                img={project.photo}
                name={project.title}
                headerRight={"#" + project.ID.toString()}
                description={project.abstract}
                category={project.category}
              />
            </div>
          </List.Item>
        ))}
      </List>
    </article>
  );
};
