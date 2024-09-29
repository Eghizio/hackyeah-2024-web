import s from "./RegisterForm.module.css";
import { Link } from "../../../components/Link/Link";
import { Button } from "../../../components/Button/Button";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface Props {
  navigateToLogin: () => void;
}

// {
//   "email": "admin@mail.com",
//   "password": "admin",
//   "pesel": "123456789",
//   "full_name": "Jakub",
//   "district": "Krakow",
//   "role": "ADMIN"
// }

const mapValues = (record: Record<string, HTMLInputElement>) =>
  Object.entries(record).reduce<Record<keyof typeof record, string>>(
    (acc, [k, v]) => ({ ...acc, [k]: v.value }),
    {}
  );

export const RegisterForm = ({ navigateToLogin }: Props) => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const submitRegister: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    // @ts-ignore
    const data = mapValues(event.target.elements);
    // const { email, password, confirmPassword, pesel, full_name, district } = event.target.elements;

    // @ts-ignore
    await register(data);
    navigate("/");
  };

  return (
    <article className={`${s.layout} ${s.form}`}>
      <h1 className={s.title}>Sign up</h1>

      <form className={s.form} onSubmit={submitRegister}>
        <input
          type="email"
          className={s.input}
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          className={s.input}
          name="password"
          placeholder="Hasło"
        />
        <input
          type="password"
          className={s.input}
          name="confirmPassword"
          placeholder="Potwierdź hasło"
        />

        <input
          type="text"
          className={s.input}
          name="pesel"
          placeholder="PESEL"
        />
        <input
          type="text"
          className={s.input}
          name="full_name"
          placeholder="Pełne imię"
        />
        <input
          type="text"
          className={s.input}
          name="district"
          placeholder="Miejscowość"
        />

        <div className={s.checkboxRow}>
          <input type="checkbox" />
          <span>
            Accept our <Link>Privacy Policy</Link> and <Link>Rules</Link>.
          </span>
        </div>

        <Button type="submit" wide>
          Sign up
        </Button>
      </form>

      <div>
        <p>
          Have an account already?{" "}
          <Link onClick={navigateToLogin}>Sign in</Link>
        </p>
      </div>
    </article>
  );
};
