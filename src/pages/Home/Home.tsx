// import s from "./Home.module.css";

import { NavLink } from "react-router-dom";

interface Props {}

export const Home = ({}: Props) => {
  return (
    <main>
      <h1>Home</h1>
      <h2>User logged in content</h2>
      <NavLink to="/profile">Profile</NavLink>
      <br />
      <NavLink to="/benefits">Benefits</NavLink>
    </main>
  );
};
