import { Link } from "react-router-dom";
import {
  FaHome,
  FaFolder,
  FaUser,
  FaComment,
} from "react-icons/fa";
import "../style/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="top-line"></div>
      <nav className="nav-container">
        <Link to="/" className="nav-item">
          <FaHome />
        </Link>
        <Link to="/work" className="nav-item">
          <FaFolder />
        </Link>
        <Link to="/about" className="nav-item">
          <FaUser />
        </Link>
        <Link to="/contact" className="nav-item">
          <FaComment />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
