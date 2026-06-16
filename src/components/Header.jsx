import { NavLink } from "react-router-dom";
import {
   FaHome,
   FaFolder,
   FaUser,
   FaComment,
} from "react-icons/fa";
import MobileNav from "./MobileNav";
import "../style/Header.css";

const Header = () => {
  const navClass = ({ isActive }) =>
    isActive ? "nav-item nav-item--active" : "nav-item";

  return (
    <>
      <header className="header hidden md:block">
        <div className="top-line"></div>
        <nav className="nav-container">
          <NavLink to="/" end className={navClass}>
            <FaHome />
          </NavLink>
          <NavLink to="/work" className={navClass}>
            <FaFolder />
          </NavLink>
          <NavLink to="/about" className={navClass}>
            <FaUser />
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            <FaComment />
          </NavLink>
        </nav>
      </header>
      <MobileNav />
    </>
  );
};

export default Header;
