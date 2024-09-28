import { ReactNode } from "react";
import { Button } from "../Button/Button";

interface Props {
  onClick?: () => void;
  variant: "primary" | "secondary";
  children: ReactNode;
}

// Todo: Change to Link when routing is implemented?
export const ButtonLink = ({ onClick, variant, children }: Props) => {
  return (
    <Button onClick={onClick} variant={variant}>
      {children}
    </Button>
  );
};
