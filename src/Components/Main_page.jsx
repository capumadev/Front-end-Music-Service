import NavbarMain from "./Navbar_main";
import Start_page from "./Start_page";
import Styles from "./Styles/Main_page.module.scss";

const MainPage = () => {
    return (
        <div className={Styles.MainPage}>
            <div 
            >
                <NavbarMain />
                <Start_page />
                <div className={Styles.MainPage__overlay}>
                </div>
                
            
            </div>
           
        </div>
    );
};

export default MainPage;
