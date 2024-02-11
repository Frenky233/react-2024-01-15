import { CartButtonContainer } from '../cartButton/container';
import { UserAuth } from '../userAuth/component';
import styles from './styles.module.scss'

export const Header = () =>{
    return (
        <header className={styles.header}>
            <div className={styles.headerTitleWrapper}>
                <h1 className={styles.headerTitle}>Restaurants</h1>
                <CartButtonContainer />
            </div>
            <UserAuth />
        </header>
    );
};