import s from "./TopBar.module.css";
// TODO: Change to CityBoost logo. Also use for Favicon.
import logo from "../../assets/powercharts-logo-full.svg";
import { ImBrightnessContrast } from "react-icons/im";
import { BiFontSize } from "react-icons/bi";
// import { MdOutlineShoppingBag } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

import { useTheme } from "../../context/ThemeContext";

export const TopBar = () => {
  const { toggleTheme, toggleFontSize } = useTheme();
  return (
    <header className={s["top-bar"]}>
      <img src={logo} alt="CityBoost Logo" />

      <nav>
        <ul className={s["nav-list"]}>
          <li className={s["nav-item"]} onClick={toggleFontSize}>
            <BiFontSize size={24} />
          </li>
          <li className={s["nav-item"]} onClick={toggleTheme}>
            <ImBrightnessContrast size={24} />
          </li>
          <li className={s["nav-item"]}>
            <FaShoppingCart size={24} />
          </li>
          <li className={s["nav-item"]}>
            <FaUserLarge size={24} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
