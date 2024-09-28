import s from "./LoginForm.module.css";
import { Link } from "../../../components/Link/Link";
import { Button } from "../../../components/Button/Button";
import { useAuth } from "../../../context/AuthContext";
import googleLogo from "../../../assets/google-logo.svg";

interface Props {
  navigateToRegister: () => void;
}

export const LoginForm = ({ navigateToRegister }: Props) => {
  const { login } = useAuth();

  const loginWithGoogle = async () => {
    await login();
  };

  const remindPassword = () => {
    // console.log("Remind password");
  };

  const submitLogin: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    // implement
    await login();
  };

  return (
    <article className={`${s.layout} ${s.form}`}>
      <h1 className={s.title}>Sign in</h1>

      <form className={s.form} onSubmit={submitLogin}>
        <input type="email" className={s.input} placeholder="Email" />

        <div className={s.passwordRow}>
          <input type="password" className={s.input} placeholder="Password" />
          <Link variant="secondary" onClick={remindPassword}>
            Forgot password?
          </Link>
        </div>

        <Button type="submit" wide>
          Sign in
        </Button>
      </form>

      <div>
        <p>
          Don’t have an account yet?{" "}
          <Link onClick={navigateToRegister}>Sign up now</Link>
        </p>
      </div>
    </article>
  );
};
