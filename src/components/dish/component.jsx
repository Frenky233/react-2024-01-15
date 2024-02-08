import { Button } from "../button/component";
import { useState } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/selector";
import { Ingredients } from "../ingredients/component";

export const Dish = ({ dishId }) => {
   const [count, setCount] = useState(0); 
   const dish = useSelector(state => selectDishById(state, dishId));
   
   return (
      <div className={styles.dish}>
         <div className={styles.dishHeader}>
            <h4>
               {dish.name}
            </h4>
            <div className={styles.dishControls}>
               <Button
                  disabled={count === 0}
                  className={styles.dishButton}
                  onClick={() => {
                     if (count > 0) {
                     setCount(count - 1);
                     }
                  }}
               >
                  -
               </Button>
               {count}
               <Button
                  disabled={count === 5}
                  className={styles.dishButton}
                  onClick={() => {
                     if (count < 5) {
                     setCount(count + 1);
                     }
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