import { benefitMock } from "../data/mocks";
import { Benefit } from "../types";
import { arrayOf, resolveAfter, useMocks } from "../utils";

const url = "https://hackyeah-c628.onrender.com";

const getAllBenefits = (): Promise<Benefit[]> =>
  fetch(`${url}/benefits`).then((res) => res.json());

export const BenefitsApi = useMocks
  ? {
      getAllBenefits: () => resolveAfter(arrayOf(benefitMock, 5)),
    }
  : {
      getAllBenefits,
    };
