import { Size } from "../../constants/sizes";
import classNames from "classnames";
import styles from './styles.module.scss'

export const Button = ({onClick, children, className, size = Size.m, disabled}) => {
    return (
       <button onClick={onClick} disabled={disabled} className={classNames(styles.button, className, styles[size])}>
        {children}
       </button>
    );
 }