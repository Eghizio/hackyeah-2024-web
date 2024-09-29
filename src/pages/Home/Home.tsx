import s from "./Home.module.css";

import { WalletWidget } from "../../components/WalletWidget/WalletWidget";
import { ProjectsList } from "../../components/List/ProjectsList";
import { BenefitsList } from "../../components/List/BenefitsList";
import { benefitMock, projectMock } from "../../data/mocks";
import { arrayOf } from "../../utils";

interface Props {}

export const Home = ({}: Props) => {
  return (
    <main className={s["home"]}>
      <h2>Balance</h2>
      <WalletWidget />
      <ProjectsList projects={arrayOf(projectMock, 10)} />
      <BenefitsList benefits={arrayOf(benefitMock, 10)} />
    </main>
  );
};
