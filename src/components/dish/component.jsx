import { Button } from "../button/component";
import { useState } from "react";
import styles from "./styles.module.scss";

export const Dish = ({ dish }) => {
   const [count, setCount] = useState(0); 
   
   return (
      <div className={styles.dish}>
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
   );
 }