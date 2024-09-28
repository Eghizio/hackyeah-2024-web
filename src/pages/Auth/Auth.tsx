import { ReactNode, useState } from "react";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import s from "./Auth.module.css";
import { LoginForm } from "./LoginForm/LoginForm";
import { RegisterForm } from "./RegisterForm/RegisterForm";

// Make some proper routing FFS xD
type AuthPage = "auth" | "login" | "register";

const If = ({ children, when }: { children: ReactNode; when: boolean }) => (
  <>{when ? children : null}</>
);

export const Auth = () => {
  const [authPage, setAuthPage] = useState<AuthPage>("auth");

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
                Start using <span className={s["highlight"]}>CityBoost</span>{" "}
                now and make your community life better.
              </p>
            </div>

            <div className={s["buttons"]}>
              <ButtonLink variant="primary" onClick={navigateToLogin}>
                Sign in
              </ButtonLink>
              <ButtonLink variant="secondary" onClick={navigateToRegister}>
                Sign up
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
