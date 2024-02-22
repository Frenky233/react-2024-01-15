import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Ingredients } from "../ingredients/component";
import { cartActions, selectProductAmountById } from "../../redux/ui/cart";

export const Dish = ({ dish }) => {
   const amount = useSelector(state => selectProductAmountById(state, dish.id));
   const dispatch = useDispatch();
   
   return (
      <div className={styles.dish}>
         <div className={styles.dishHeader}>
            <h4>
               {dish.name}
            </h4>
            <div className={styles.dishControls}>
               <Button
                  disabled={amount === 0}
                  className={styles.dishButton}
                  onClick={() => {
                     if(amount > 0) dispatch(cartActions.decrement(dish.id))
                  }}
               >
                  -
               </Button>
               {amount}
               <Button
                  disabled={amount === 5}
                  className={styles.dishButton}
                  onClick={() => {
                     if(amount < 5) dispatch(cartActions.increment(dish.id))
                  }}
               >
                  +
               </Button>
            </div>
         </div>
         <p>Price: {dish.price}</p>
         <p>Ingredients:</p>
         <Ingredients ingredients={dish.ingredients} />
      </div>
   );
 }