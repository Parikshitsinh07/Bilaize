import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 3.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 hidden md:block"
      >
        <div className="flex justify-center items-center py-8">
          <ul className="flex items-center gap-12 text-white uppercase tracking-widest font-medium">
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500"
                    : "hover:text-red-500 transition-all"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500"
                    : "hover:text-red-500 transition-all"
                }
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-4xl font-bold px-8">
                Brielite
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500"
                    : "hover:text-red-500 transition-all"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500"
                    : "hover:text-red-500 transition-all"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </motion.nav>
      <MobileNav />
    </>
  );
};

export default Navbar;

