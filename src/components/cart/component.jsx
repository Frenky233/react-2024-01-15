import { Button } from '../button/component';
import { Dish } from '../dish/component';
import styles from './styles.module.scss'

export const Cart = ({ productIds, onClose }) =>{
    return (
        <div className={styles.cart}>
            <div className={styles.cartHeader}>
                <h2 className={styles.cartTitle}>Your Cart</h2>
                <Button onClick={() => onClose()}>Close</Button>
            </div>
            {productIds?.length 
                ? productIds.map(productId => <Dish dishId={productId} />)
                : 'Cart is empty'
            }
        </div>
    );
};