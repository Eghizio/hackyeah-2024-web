import { List } from "./List";
import { Benefit } from "../../types";

interface Props {
  benefits: Benefit[];
}

export const BenefitsList = ({ benefits }: Props) => {
  return (
    <List>
      {benefits.map((benefit, i) => (
        <List.Item key={i}>BenefitCard: {JSON.stringify(benefit)}</List.Item>
      ))}
    </List>
  );
};
