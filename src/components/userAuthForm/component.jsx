import { Button } from '../button/component';
import styles from './styles.module.scss'
import { useReducer, useContext, useLayoutEffect, useRef } from "react";
import { UserContext } from '../../contexts/user';

const initialValue = {
    name: '',
    eMail: '',
}

const reducer = (state, {type, payLoad}) => {
    switch (type){
        case 'setName': {
            return{
                ...state,
                name: payLoad
            }
        }
        case 'setEMail': {
            return{
                ...state,
                eMail: payLoad
            }
        }
        default:
            return state
    }
}

export const UserAuthForm = ({ onClose }) =>{
    const [form, dispatch] = useReducer(reducer, initialValue);
    const { setUser } = useContext(UserContext);
    
    const onChange = {
        setName: (name) => dispatch({type: 'setName', payLoad: name}),
        setEMail: (eMail) => dispatch({type: 'setEMail', payLoad: eMail}),
    }

    const onLogInClick = () =>{
        setUser({ 
            name: form.name, 
            eMail: form.eMail,
            isAuthenticated: true
        });
        onClose();
    }

    const onCancelClick = () =>{
        onClose();
    }

    return (
        <form className={styles.userAuthForm}>
            <div className={styles.userAuthFormField}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={event => onChange.setName(event.target.value)}
                />
            </div>
            <div className={styles.userAuthFormField}>
                <label htmlFor="eMail">E-Mail</label>
                <input 
                    type="text"
                    id="eMail"
                    value={form.eMail}
                    onChange={event => onChange.setEMail(event.target.value)}
                />
            </div>
            <div className={styles.userAuthFormButtons}>
                <Button onClick={onLogInClick} className={styles.userAuthFormButton} size='l' disabled={!form.name}>LogIn</Button>
                <Button onClick={onCancelClick} className={styles.userAuthFormButton} size='l'>Cancel</Button>
            </div>
        </form>
    );
}