import styles from "./Styles/Navbar.module.scss";
import logo from "../assets/Img/Logo.png"; // Importar la imagen
import { BiMenuAltRight } from "react-icons/bi";

const NavbarMain = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <img src={logo} alt="Logo" className={styles.header__logo} />
        <nav className={styles.header__nav}>
          <ul>
            <li>  
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Reseñas</a>
            </li>
            <li>
              <a href="/">Nosotros</a>
            </li>
          </ul>
          <button>CTA PAGE</button>
        </nav>

        <div className={styles.header__toggle}>
          <BiMenuAltRight />
        </div>
      </div>
    </header>
  );
};

export default NavbarMain;
