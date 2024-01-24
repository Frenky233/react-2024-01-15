import styles from './styles.module.scss'

export const RestaurantItem = ({restaurant}) =>{
    return (
        <ul className={styles.restaurantItem}>
            <h2>{restaurant.name}</h2>
            <h3>Меню</h3>
            <ul>
                {restaurant.menu.map(item => <li>{item.name}</li>)}
            </ul>
            <h3>Отзывы</h3>
            <ul>
                {restaurant.reviews.map(item => <li>{item.text}</li>)}
            </ul>
        </ul>
    );
};