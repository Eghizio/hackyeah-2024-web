import { useQuery } from "@tanstack/react-query";
import { ProjectsApi } from "../projects";

export const useAllProjectsQuery = () =>
  useQuery({
    queryKey: ["projects-get-all"],
    queryFn: ProjectsApi.getAllProjects,
  });
