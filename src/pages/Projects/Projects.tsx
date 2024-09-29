import { ProjectsList } from "../../components/List/ProjectsList";
import s from "./Projects.module.css";

interface Props {}

export const Projects = ({}: Props) => {
  return (
    <main className={s["projects"]}>
      <ProjectsList />
    </main>
  );
};
