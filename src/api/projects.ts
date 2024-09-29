import { projectMock } from "../data/mocks";
import { Project } from "../types";
import { arrayOf, resolveAfter, useMocks } from "../utils";

const url = "https://backendhackyeah.onrender.com";

const getAllProjects = (): Promise<Project[]> =>
  fetch(`${url}/get_projects`).then((res) => res.json());

export const ProjectsApi = useMocks
  ? {
      getAllProjects: () => resolveAfter(arrayOf(projectMock, 5)),
    }
  : {
      getAllProjects,
    };
