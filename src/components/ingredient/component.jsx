import classNames from "classnames";
import styles from './styles.module.scss';

export const Ingredient = ({ingredient, className}) =>{
    return (
        <div className={classNames(styles.ingredient, className)}>
            <p>{ingredient}</p>
        </div>
    );
};