import { Footer } from "../footer/component";
import { Header } from "../header/component";

import styles from './styles.module.scss'

export const Layout = ({children}) =>{
    return (
        <div className={styles.layout}>
            <Header />
                <div className={styles.layoutMain}>
                    {children}
                </div>
            <Footer />
            <div id="modalLayer" className={styles.modalLayer}></div>
        </div>
    );
};