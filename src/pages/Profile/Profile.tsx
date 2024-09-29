import s from "./Profile.module.css";

import { Button } from "../../components/Button/Button";
import { useAuth } from "../../context/AuthContext";

interface Props {}

export const Profile = ({}: Props) => {
  const { logout } = useAuth();

  return (
    <main className={s["profile"]}>
      <h1>Profil użytkownika</h1>
      <Button onClick={logout}>Wyloguj się</Button>
    </main>
  );
};
