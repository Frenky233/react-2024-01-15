import { Menu } from '../menu/component';
import { ReviewForm } from '../reviewForm/component';
import { Reviews } from '../reviews/component';
import { UserContext } from '../../contexts/user';
import { useContext } from "react";
import styles from './styles.module.scss'

export const RestaurantItem = ({restaurant}) =>{
    const { isAuthenticated } = useContext(UserContext);
    
    return (
        <div className={styles.restaurantItem}>
            <h2>{restaurant.name}</h2>
            <h3>Меню</h3>
            <Menu menu={restaurant.menu}/>
            <h3>Отзывы</h3>
            <Reviews reviews={restaurant.reviews}/>
            {isAuthenticated && <ReviewForm className={styles.restaurantItemForm}/>}
        </div>
    );
};