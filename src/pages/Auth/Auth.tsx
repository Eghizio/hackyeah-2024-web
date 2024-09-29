import { ReactNode, useState } from "react";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import s from "./Auth.module.css";
import { LoginForm } from "./LoginForm/LoginForm";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

// Make some proper routing FFS xD
type AuthPage = "auth" | "login" | "register";

const If = ({ children, when }: { children: ReactNode; when: boolean }) => (
  <>{when ? children : null}</>
);

export const Auth = () => {
  const [authPage, setAuthPage] = useState<AuthPage>("auth");
  const { user } = useAuth();

  if (user) return <Navigate to="/" />;

  const navigateToLogin = () => {
    setAuthPage("login");
  };

  const navigateToRegister = () => {
    setAuthPage("register");
  };

  return (
    <div className={s["auth-container"]}>
      <main className={s["layout"]}>
        <If when={authPage === "auth"}>
          <article>
            <div className={s["text"]}>
              <p>
                Dołącz do <span className={s["highlight"]}>CityBoost</span> i
                spraw, aby Twoja społeczność żyła lepiej!
              </p>
            </div>

            <div className={s["buttons"]}>
              <ButtonLink variant="primary" onClick={navigateToLogin}>
                Zaloguj się
              </ButtonLink>
              <ButtonLink variant="secondary" onClick={navigateToRegister}>
                Zarejestruj się
              </ButtonLink>
            </div>
          </article>
        </If>

        <If when={authPage === "login"}>
          <LoginForm navigateToRegister={navigateToRegister} />
        </If>

        <If when={authPage === "register"}>
          <RegisterForm navigateToLogin={navigateToLogin} />
        </If>
      </main>
    </div>
  );
};
