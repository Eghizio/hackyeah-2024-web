import { get } from "./helpers";

const url = "https://backendhackyeah.onrender.com";

const getWallet = (userId: string) => get(`${url}/wallet/${userId}`);

export const PaymentApi = {
  getWallet,
};
