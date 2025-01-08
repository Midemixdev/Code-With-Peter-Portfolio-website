import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../features/LogicSlice";

function PageNav() {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openModal());
  };
  const navRef = useRef();
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavBar = () => {
    setNavOpen(!navOpen);
    navRef.current.classList.toggle("responsive-nav");
  };
  const handleClose = () => {
    setNavOpen(false);
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <header>
      <img src="/masterrev.png" alt="codemaster logo" className="logo" />
      <nav ref={navRef}>
        <ul>
          <li onClick={handleClose}>
            <a href="#about">About</a>
          </li>
          <li onClick={handleClose}>
            <a href="#services">Services</a>
          </li>
          <li onClick={handleClose}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <button className="btn" onClick={handleOpen}>
              Get in touch
            </button>
          </li>
          {navOpen ? (
            <li>
              <button className="nav-btn nav-btn-close" onClick={toggleNavBar}>
                <FaTimes />
              </button>
            </li>
          ) : null}
        </ul>
        {!navOpen && (
          <button className="nav-btn" onClick={toggleNavBar}>
            <FaBars />
          </button>
        )}
      </nav>
    </header>
  );
}

export default PageNav;
