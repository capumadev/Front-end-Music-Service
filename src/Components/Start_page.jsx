import Styles_page from './Styles/Start_page.module.scss';
import ImagePage from "../assets/Img/Fondo.png";
const Start_page = () => {
    return (
        <div 
            className={Styles_page.MainPage__img} 
            style={{ backgroundImage: `url(${ImagePage})` }}
        >
        <header className={Styles_page.header}>  
            <div className={Styles_page.header__content}>
            <h1 className={Styles_page.header__title}>Bienvenido </h1>
            
<p className={Styles_page.header__text}>Cuentanos tu experiencia con nuestros productos</p>
        
                
            </div>
        </header>
        </div>
    );
}

export default Start_page;