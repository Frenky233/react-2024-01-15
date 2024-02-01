import { Menu } from '../menu/component';
import { ReviewForm } from '../reviewForm/component';
import { Reviews } from '../reviews/component';
import styles from './styles.module.scss'

export const RestaurantItem = ({restaurant}) =>{
    return (
        <div className={styles.restaurantItem}>
            <h2>{restaurant.name}</h2>
            <h3>Меню</h3>
            <Menu menu={restaurant.menu}/>
            <h3>Отзывы</h3>
            <Reviews reviews={restaurant.reviews}/>
            <ReviewForm className={styles.restaurantItemForm}/>
        </div>
    );
};