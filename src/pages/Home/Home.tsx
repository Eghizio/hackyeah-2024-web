import s from "./Home.module.css";

import { NavLink } from "react-router-dom";
import { WalletWidget } from "../../components/WalletWidget/WalletWidget";
import { ProjectsList } from "../../components/List/ProjectsList";
import { BenefitsList } from "../../components/List/BenefitsList";

interface Props {}

export const Home = ({}: Props) => {
  return (
    <>
      <div>
        <h1>Home</h1>
        <NavLink to="/profile">Profile</NavLink>
        <br />
        <NavLink to="/benefits">Benefits</NavLink>
      </div>

      <main className={s["home"]}>
        <WalletWidget />
        <ProjectsList projects={[{}, {}, {}]} />
        <BenefitsList benefits={[{}, {}, {}]} />
      </main>
    </>
  );
};
