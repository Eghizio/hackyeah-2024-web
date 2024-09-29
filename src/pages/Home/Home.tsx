import s from "./Home.module.css";

import { WalletWidget } from "../../components/WalletWidget/WalletWidget";
import { ProjectsList } from "../../components/List/ProjectsList";
import { BenefitsList } from "../../components/List/BenefitsList";

interface Props {}

export const Home = ({}: Props) => {
  return (
    <main className={s["home"]}>
      <h2>Saldo</h2>
      <WalletWidget />
      <ProjectsList />
      <BenefitsList />
    </main>
  );
};
