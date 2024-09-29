import s from "./TopBar.module.css";
// TODO: Change to CityBoost logo. Also use for Favicon.
import logo from "../../assets/logo-full.svg";
import { ImBrightnessContrast } from "react-icons/im";
import { BiFontSize } from "react-icons/bi";
// import { MdOutlineShoppingBag } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

import { useTheme } from "../../context/ThemeContext";
import { Link, NavLink } from "react-router-dom";

export const TopBar = () => {
  const { toggleTheme, toggleFontSize } = useTheme();
  return (
    <header className={s["top-bar"]}>
      <Link to="/">
        <img src={logo} alt="CityBoost Logo" />
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
