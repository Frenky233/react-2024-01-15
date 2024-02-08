import { Menu } from '../menu/component';
import { ReviewForm } from '../reviewForm/component';
import { Reviews } from '../reviews/component';
import { UserContext } from '../../contexts/user';
import { useContext } from "react";
import { useSelector } from 'react-redux';
import styles from './styles.module.scss'
import { selectRestaurantById } from '../../redux/entities/restaurants/selector';

export const RestaurantItem = ({restaurantId}) =>{
    const { isAuthenticated } = useContext(UserContext);
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    
    return (
        <div className={styles.restaurantItem}>
            <h2>{restaurant.name}</h2>
            <h3>Меню</h3>
            <Menu menuIds={restaurant.menu}/>
            <h3>Отзывы</h3>
            <Reviews reviewsId={restaurant.reviews}/>
            {isAuthenticated && <ReviewForm className={styles.restaurantItemForm}/>}
        </div>
    );
};