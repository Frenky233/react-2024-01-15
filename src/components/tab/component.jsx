import { RestaurantItem } from '../restaurantItem/component';
import styles from './styles.module.scss'

export const Tab = ({restaurant}) =>{
    return (
        <div className={styles.tab}>
            <div>
                <RestaurantItem restaurant={restaurant} />
            </div>
        </div>
    )
};