import Styles_page from './Styles/Start_page.module.scss';

const Start_page = () => {
    return (
        <header className={Styles_page.header}>
            
            <div className={Styles_page.header__content}>
            <h1 className={Styles_page.header__title}>Bienvenido</h1>
                <p className={Styles_page.header__text}>Cuentanos tu experiencia con nuestros productos</p>
            </div>
        </header>
    );
}

export default Start_page;