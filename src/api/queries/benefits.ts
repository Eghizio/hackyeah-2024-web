import { useQuery } from "@tanstack/react-query";
import { BenefitsApi } from "../benefits";

export const useAllBenefitsQuery = () =>
  useQuery({
    queryKey: ["benefits-get-all"],
    queryFn: BenefitsApi.getAllBenefits,
  });
