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

export const AuthApi = {
  health,
  login,
};

// {
//   "email": "admin@mail.com",
//   "password": "admin",
//   "pesel": "123456789",
//   "full_name": "Jakub",
//   "district": "Krakow",
//   "role": "ADMIN"
// }
