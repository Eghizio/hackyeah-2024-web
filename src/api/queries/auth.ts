import { useMutation, useQuery } from "@tanstack/react-query";
import { AuthApi } from "../auth";

export const useAuthHealthQuery = () =>
  useQuery({
    queryKey: ["auth-health"],
    queryFn: AuthApi.health,
  });

export const useLoginMutation = () =>
  useMutation({
    mutationFn: AuthApi.login,
    // onSuccess: () => {
    //   // Invalidate and refetch
    //   queryClient.invalidateQueries({ queryKey: ["todos"] });
    // },
  });

// access_token;
// refresh_token;
