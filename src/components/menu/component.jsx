import { DishContainer } from "../dish/container";
import styles from "./styles.module.scss";

export const Menu = ({ dishIds }) => {   
   return (
      <ul className={styles.menu}>
         {dishIds.map((dishId) => {
            return (
               <li key={dishId}>
                  <DishContainer dishId={dishId} />
               </li>
            );
         })}
      </ul>
   );
}