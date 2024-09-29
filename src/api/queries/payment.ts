import { useQuery } from "@tanstack/react-query";
import { PaymentApi } from "../payment";

export const useWalletQuery = (userId: string) =>
  useQuery({
    queryKey: ["wallet-get-by-userid"],
    queryFn: () => PaymentApi.getWallet(userId),
  });
