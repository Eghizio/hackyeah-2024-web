import s from "./Home.module.css";

import { WalletWidget } from "../../components/WalletWidget/WalletWidget";
import { ProjectsList } from "../../components/List/ProjectsList";
import { BenefitsList } from "../../components/List/BenefitsList";
import { NavLink } from "react-router-dom";

interface Props {}

export const Home = ({}: Props) => {
  return (
    <main className={s["home"]}>
      <h2>Saldo</h2>
      <WalletWidget />

      <ProjectsList />
      <NavLink to="/projects">Zobacz więcej projektów</NavLink>

      <BenefitsList />
      <NavLink to="/benefits">Zobacz więcej benefitów</NavLink>
    </main>
  );
};
