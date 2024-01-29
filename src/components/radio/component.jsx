import styles from './styles.module.scss'
import classNames from 'classnames'

export const Radio = ({title, name, onChange, checked, className, id}) =>{
    return (
        <label className={classNames(styles.radio, className)}>
            <input className={styles.radioInput} type="radio" name={name} onChange={onChange} checked={checked}></input>
            <div className={styles.radioTitle}>{title}</div>
        </label>
    )
}