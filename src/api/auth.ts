const url = "https://cityboost-auth.onrender.com";

const health = () =>
  fetch(`${url}/health`)
    .then((res) => res.text())
    .then((data) => {
      console.log({ authHealth: data });
      return data;
    });

export const AuthApi = {
  health,
};
