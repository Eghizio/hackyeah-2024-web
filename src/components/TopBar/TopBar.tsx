import s from "./TopBar.module.css";
import logo from "../../assets/logo.svg";
import { ImBrightnessContrast } from "react-icons/im";
import { BiFontSize } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import { Link, NavLink } from "react-router-dom";

export const TopBar = () => {
  const { toggleTheme, toggleFontSize } = useTheme();
  return (
    <header className={s["top-bar"]}>
      <Link to="/" className={s["logo"]}>
        <img src={logo} alt="CityBoost Logo" color="white" />
        CityBoost
      </Link>

      <nav>
        <ul className={s["nav-list"]}>
          <li className={s["nav-item"]} onClick={toggleFontSize}>
            <BiFontSize size={24} />
          </li>
          <li className={s["nav-item"]} onClick={toggleTheme}>
            <ImBrightnessContrast size={24} />
          </li>
          <li className={s["nav-item"]}>
            <NavLink to="/benefits">
              <FaShoppingCart size={24} />
            </NavLink>
          </li>
          <li className={s["nav-item"]}>
            <NavLink to="/profile">
              <FaUserLarge size={24} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
