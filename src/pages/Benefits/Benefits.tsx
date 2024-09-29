import { BenefitsList } from "../../components/List/BenefitsList";
import s from "./Benefits.module.css";

interface Props {}

export const Benefits = ({}: Props) => {
  return (
    <main className={s["benefits"]}>
      <BenefitsList />
    </main>
  );
};
