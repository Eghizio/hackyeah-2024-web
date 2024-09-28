import s from "./TopBar.module.css";
// TODO: Change to CityBoost logo. Also use for Favicon.
import logo from "../../assets/powercharts-logo-full.svg";

import { useTheme } from "../../context/ThemeContext";

export const TopBar = () => {
  const { toggleTheme } = useTheme();
  return (
    <header className={s["top-bar"]}>
      <img src={logo} alt="CityBoost Logo" />

      <nav>
        <ul className={s["nav-list"]}>
          <li className={s["nav-item"]}>Font</li>
          <li className={s["nav-item"]} onClick={toggleTheme}>
            Theme
          </li>
          <li className={s["nav-item"]}>Cart</li>
          <li className={s["nav-item"]}>Profile</li>
        </ul>
      </nav>
    </header>
  );
};
