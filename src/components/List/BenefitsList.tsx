import { List } from "./List";
import { Card } from "../Card/Card";
import s from "./List.module.css";

import { useAllBenefitsQuery } from "../../api/queries/benefits";
import { Spinner } from "../Spinner/Spinner";

interface Props {
  teaser?: boolean;
}

export const BenefitsList = ({ teaser = false }: Props) => {
  const { data, isLoading, isError } = useAllBenefitsQuery();

  if (isLoading) return <Spinner />;
  if (isError) return "Error :c";

  const benefits = data?.length ? data : [];
  const displayedBenefits = teaser ? benefits.slice(0, 5) : benefits;

  return (
    <article className={s["list-wrapper"]}>
      <h2>Benefits</h2>
      <List>
        {displayedBenefits.map((benefit, i) => (
          <List.Item key={i}>
            <Card
              img={benefit.imageUrl}
              name={benefit.name}
              headerRight={`$ ${benefit.price}`}
              description={benefit.description}
              category={benefit.category}
            />
          </List.Item>
        ))}
      </List>
    </article>
  );
};
