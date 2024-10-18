import styles from "./Styles/Navbar.module.scss";
import { BiMenuAltRight } from "react-icons/bi";

const NavbarMain = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h2 className={styles.header__logo}>navbar</h2>
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
