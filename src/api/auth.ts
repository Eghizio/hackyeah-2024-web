const url = "https://cityboost-auth.onrender.com";

const health = () =>
  fetch(`${url}/health`)
    .then((res) => res.json())
    .then((health) => {
      console.log({ health });
      return health;
    });

const login = (body: { email: string; password: string }) =>
  fetch(`${url}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());

const register = (body: {
  email: string;
  password: string;
  pesel: string;
  full_name: string;
  district: string;
}) =>
  fetch(`${url}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());

export const AuthApi = {
  health,
  login,
  register,
};
