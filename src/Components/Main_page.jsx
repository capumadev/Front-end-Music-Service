import NavbarMain from "./Navbar_main";
import Start_page from "./Start_page";
import Styles from "./Styles/Main_page.module.scss";
import ImagePage from "../assets/Img/Logo_principal.jpeg";

const MainPage = () => {
    return (
        <div className={Styles.MainPage}>
            <div 
                className={Styles.MainPage__img} 
                style={{ backgroundImage: `url(${ImagePage})` }}
            >
                <NavbarMain />
                <Start_page />
                <div className={Styles.MainPage__overlay}>
                </div>
            </div>
            <header></header>
            <main>
                <section>
                    <h2>Reviews</h2>
                    {/* Aquí agrega código para obtener y mostrar reseñas */}
                </section>
                <section>
                    <h2>Top Rated</h2>
                    {/* Aquí agrega código para obtener y mostrar las reseñas mejor calificadas */}
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Music Service</p>
            </footer>
        </div>
    );
};

export default MainPage;
