import { List } from "./List";
import { Benefit } from "../../types";
import { Card } from "../Card/Card";
import s from "./List.module.css";

interface Props {
  benefits: Benefit[];
}

export const BenefitsList = ({ benefits }: Props) => {
  return (
    <article className={s["list-wrapper"]}>
      <h2>Benefits</h2>
      <List>
        {benefits.map((benefit, i) => (
          <List.Item key={i}>
            <Card
              img={benefit.imageUrl}
              name={benefit.name}
              displayId={`$ ${benefit.price}`}
              description={benefit.description}
              category={benefit.category}
            />
          </List.Item>
        ))}
      </List>
    </article>
  );
};
