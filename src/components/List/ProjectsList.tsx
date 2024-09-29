import { List } from "./List";
import { Project } from "../../types";

interface Props {
  projects: Project[];
}

export const ProjectsList = ({ projects }: Props) => {
  return (
    <List>
      {projects.map((project, i) => (
        <List.Item key={i}>ProjectCard: {JSON.stringify(project)}</List.Item>
      ))}
    </List>
  );
};
