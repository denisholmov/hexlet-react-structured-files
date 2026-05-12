import styles from "./styles/index.module.css"

export const Header = () => {
    return(
        <header className={styles.header}>
           <div className={styles.container}>
           <div className={styles.logo}>
                {/* <img src={logo} alt="logo" /> */}
                Logo
            </div>

            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="#reproductions">Репродукции</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#new-collections">Новинки</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#about-us">О нас</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#">Корзина</a>
                    </li>
                </ul>
            </nav>
           </div>
        </header>
    )
}