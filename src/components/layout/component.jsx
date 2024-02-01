import { Footer } from "../footer/component";
import { Header } from "../header/component";

import styles from './styles.module.scss'

export const Layout = ({children}) =>{
    return (
        <div>
            <Header />
                <div className={styles.main}>
                    {children}
                </div>
            <Footer />
        </div>
    );
};