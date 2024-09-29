import { get, post } from "./helpers";

const url = "https://cityboost-auth.onrender.com";

const health = () => get(`${url}/health`);

const login = (body: { email: string; password: string }) =>
  post(`${url}/login`, body);

const register = (body: {
  email: string;
  password: string;
  pesel: string;
  full_name: string;
  district: string;
}) => post(`${url}/register`, body);

const me = (body: { access_token: string }) => post(`${url}/get_me`, body);

export const AuthApi = {
  health,
  login,
  register,
  me,
};
