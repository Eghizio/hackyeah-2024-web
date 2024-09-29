import s from "./LoginForm.module.css";
import { Link } from "../../../components/Link/Link";
import { Button } from "../../../components/Button/Button";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface Props {
  navigateToRegister: () => void;
}

export const LoginForm = ({ navigateToRegister }: Props) => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const remindPassword = () => {
    // console.log("Remind password");
  };

  const submitLogin: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    // @ts-ignore
    const { email, password } = event.target.elements;
    await login(email.value, password.value);
    navigate("/");
  };

  return (
    <article className={`${s.layout} ${s.form}`}>
      <h1 className={s.title}>Logowanie</h1>

      <form className={s.form} onSubmit={submitLogin}>
        <input
          type="email"
          className={s.input}
          name="email"
          placeholder="Email"
          required
        />

        <div className={s.passwordRow}>
          <input
            type="password"
            className={s.input}
            name="password"
            placeholder="Hasło"
            required
          />
          <Link variant="secondary" onClick={remindPassword}>
            Zapomniałeś hasła?
          </Link>
        </div>

        <Button type="submit" wide>
          Zaloguj się
        </Button>
      </form>

      <div>
        <p>
          Nie masz jeszcze konta?{" "}
          <Link onClick={navigateToRegister}>Zarejestruj się teraz</Link>
        </p>
      </div>
    </article>
  );
};
