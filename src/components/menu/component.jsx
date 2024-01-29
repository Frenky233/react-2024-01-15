import { Dish } from "../dish/component";

export const Menu = ({ menu }) => {
   return (
      <ul>
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