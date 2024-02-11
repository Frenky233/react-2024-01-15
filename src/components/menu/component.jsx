import { DishContainer } from "../dish/container";
import styles from "./styles.module.scss";

export const Menu = ({ menuIds }) => {
   return (
      <ul className={styles.menu}>
         {menuIds.map((dishId) => {
            return (
               <li>
                  <DishContainer dishId={dishId} />
               </li>
            );
         })}
      </ul>
   );
}