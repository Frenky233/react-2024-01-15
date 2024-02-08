import { Dish } from "../dish/component";
import styles from "./styles.module.scss";

export const Menu = ({ menuIds }) => {
   return (
      <ul className={styles.menu}>
         {menuIds.map((dishId) => {
            return (
               <li>
                  <Dish dishId={dishId} />
               </li>
            );
         })}
      </ul>
   );
}