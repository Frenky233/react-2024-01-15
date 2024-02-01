import { Dish } from "../dish/component";
import styles from "./styles.module.scss";

export const Menu = ({ menu }) => {
   return (
      <ul className={styles.menu}>
         {menu.map((dish) => {
            return (
               <li>
                  <Dish dish={dish} />
               </li>
            );
         })}
      </ul>
   );
}