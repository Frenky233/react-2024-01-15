import { Ingredient } from '../ingredient/component';
import styles from './styles.module.scss';

export const Ingredients = ({ingredients}) => {
    return (
        <ul className={styles.ingredients}>
           {ingredients.map((ingredient) => {
              return (
                 <li key={ingredient}>
                    <Ingredient ingredient={ingredient} className={styles.ingredientsItem}/>
                 </li>
              );
           })}
        </ul>
     );
};