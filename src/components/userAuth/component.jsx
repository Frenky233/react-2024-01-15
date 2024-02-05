import { useContext, useState } from 'react'
import styles from './styles.module.scss'
import { UserContext } from '../../contexts/user';
import { createPortal } from 'react-dom';
import { Modal } from '../modal/component';
import { Button } from '../button/component';

export const UserAuth = ({}) => {
    const {name, isAuthenticated, setUser} = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);

    const onLogInClick = () =>{
        setShowModal(true);
    }

    const onLogOutClick  = () =>{
        setUser({name: '', eMail: '', isAuthenticated: false});
    }
    
    return(
        <div className={styles.userAuth}>
            {!isAuthenticated && (
                <div className={styles.userAuthInner}>
                    <Button onClick={onLogInClick} className={styles.userAuthButton} size="m">
                        Login
                    </Button>
                </div>
            )}

            {isAuthenticated && (
                <div className={styles.userAuthInner}>
                    <span className={styles.userAuthName}>Logged as {name}</span>
                    <Button onClick={onLogOutClick} className={styles.userAuthButton} size="m">
                        Logout
                    </Button>
                </div>
            )}

            {showModal && createPortal(<Modal onClose={() => setShowModal(false)} />, document.body)}
        </div>
    )
}