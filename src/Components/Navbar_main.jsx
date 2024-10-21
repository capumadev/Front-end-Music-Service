import styles from "./Styles/Navbar.module.scss";
import logo from "../assets/Img/Logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import React,{ useState, useEffect } from "react";

const NavbarMain = () => {
  const [menu_Open, setMenuOpen] = useState(true);

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });


  useEffect(() =>  {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  useEffect(() => {
    if (size.width > 768) {
      setMenuOpen(true);
    }
  }, [size.width  < 768 && menu_Open]);

  const menu_toggle = () => {
    setMenuOpen((p) => (!p));
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <img src={logo} alt="Logo" className={styles.header__logo} />
        <nav className={`${styles.header__nav} ${menu_Open && size.width < 768 ? styles.isMenu : ""}`}>
          <ul>
            <li>  
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Reseñas</a>
            </li>
            <li>
              <a href="/">Noticias</a>
            </li>
            <li>
              <a href="/">Nosotros</a>
            </li>
            <li>
            <button>Registro</button>
            </li>
          </ul>
        </nav>
        <div className={styles.header__toggle}>
         {!menu_Open ? 
         (<AiOutlineClose onClick={menu_toggle} />) 
         : 
         (<BiMenuAltRight onClick={menu_toggle} />)}
        </div>
      </div>
    </header>
  );
};

export default NavbarMain;
