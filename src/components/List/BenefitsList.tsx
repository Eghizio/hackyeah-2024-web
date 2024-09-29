import { List } from "./List";
import { Card } from "../Card/Card";
import s from "./List.module.css";
// import { useAuthHealthQuery } from "../../api/queries/auth";
import { useAllBenefitsQuery } from "../../api/queries/benefits";
import { Spinner } from "../Spinner/Spinner";

interface Props {}

export const BenefitsList = ({}: Props) => {
  const { data: benefits, isLoading, isError } = useAllBenefitsQuery();
  // useAuthHealthQuery();

  if (isLoading) return <Spinner />;
  if (isError) return "Error :c";
  return (
    <article className={s["list-wrapper"]}>
      <h2>Benefits</h2>
      <List>
        {benefits?.length
          ? benefits.map((benefit, i) => (
              <List.Item key={i}>
                <Card
                  img={benefit.imageUrl}
                  name={benefit.name}
                  headerRight={`$ ${benefit.price}`}
                  description={benefit.description}
                  category={benefit.category}
                />
              </List.Item>
            ))
          : null}
      </List>
    </article>
  );
};
