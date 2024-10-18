import NavbarMain from "./Navbar_main";

const MainPage = () => {
    return (
        <div>
           <NavbarMain />
            <header>     
                <h1>Music Service Reviews</h1>
            </header>
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
