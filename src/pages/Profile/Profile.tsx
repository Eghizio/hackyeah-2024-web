// import s from "./Profile.module.css";

import { Button } from "../../components/Button/Button";
import { useAuth } from "../../context/AuthContext";

interface Props {}

export const Profile = ({}: Props) => {
  const { logout } = useAuth();

  return (
    <main>
      <h1>Profile</h1>
      <Button onClick={logout}>Log out</Button>
    </main>
  );
};
