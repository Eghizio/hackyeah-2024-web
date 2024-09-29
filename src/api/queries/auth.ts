import { useMutation, useQuery } from "@tanstack/react-query";
import { AuthApi } from "../auth";

export const useAuthHealthQuery = () =>
  useQuery({
    queryKey: ["auth-health"],
    queryFn: AuthApi.health,
  });

export const useLoginMutation = () =>
  useMutation({ mutationFn: AuthApi.login });

export const useRegisterMutation = () =>
  useMutation({ mutationFn: AuthApi.register });

export const useMeMutation = () => useMutation({ mutationFn: AuthApi.me });
