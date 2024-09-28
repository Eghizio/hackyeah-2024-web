import s from "./RegisterForm.module.css";
import { Link } from "../../../components/Link/Link";
import { Button } from "../../../components/Button/Button";
import { useAuth } from "../../../context/AuthContext";
import googleLogo from "../../../assets/google-logo.svg";

interface Props {
  navigateToLogin: () => void;
}

export const RegisterForm = ({ navigateToLogin }: Props) => {
  const { login, register } = useAuth();

  const loginWithGoogle = async () => {
    await login();
  };

  const submitRegister: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    // implement
    await register();
  };

  return (
    <article className={`${s.layout} ${s.form}`}>
      <h1 className={s.title}>Sign up</h1>

      <Button variant="secondary" wide onClick={loginWithGoogle}>
        <div className={s.googleBtn}>
          <img src={googleLogo} alt="Google Logo" />{" "}
          <span>Sign up with Google</span>
        </div>
      </Button>

      <div className={s.divider}>
        <hr className={s.line} />
        <span className={s.text}>or sign up with email</span>
        <hr className={s.line} />
      </div>

      <form className={s.form} onSubmit={submitRegister}>
        <input type="email" className={s.input} placeholder="Email" />
        <input type="password" className={s.input} placeholder="Password" />
        <input
          type="password"
          className={s.input}
          placeholder="Confirm password"
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
