import { useQuery } from "@tanstack/react-query";
import { AuthApi } from "../auth";

export const useAuthHealthQuery = () =>
  useQuery({
    queryKey: ["auth-health"],
    queryFn: AuthApi.health,
  });
