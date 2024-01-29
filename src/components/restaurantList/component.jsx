import { RestaurantItem } from "../restaurantItem/component";

import styles from './styles.module.scss'

export const RestaurantList = ({restaurants}) =>{
    return (
        <div className={styles.restaurantList}>
            {restaurants.map(restaurant => (
                <RestaurantItem restaurant = {restaurant}/>
            ))}
        </div>
    );
};