import { UserAuth } from '../userAuth/component';
import styles from './styles.module.scss'

export const Header = () =>{
    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>Restaurants</h1>
            <UserAuth />
        </header>
    );
};