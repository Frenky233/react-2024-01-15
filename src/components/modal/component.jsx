import styles from './styles.module.scss'
import { useEffect, useRef } from "react";
import { createPortal } from 'react-dom';

export const Modal = ({ children, onClose }) => {
    const modalLayer = useRef(document.getElementById('modalLayer'));
    const root = useRef(document.getElementById('root'));

    const backgroundClickHandler = (event) =>{
        if(event.target.id === 'modal'){
            onClose();
        }
    }

    useEffect(() =>{
        const escKeyDownHandler = (event) =>{
            if(event.code === 'Escape'){
                onClose();
            }
        }
    
        document.body.style.overflowY = 'hidden'
        document.addEventListener('keydown', escKeyDownHandler);

        return () =>{
            document.removeEventListener('keydown', escKeyDownHandler);
            document.body.removeAttribute('style');
        }
    }, []);
    
    return createPortal(
        <div id='modal' onClick={backgroundClickHandler} className={styles.modal}>
            {children}
        </div>,
        modalLayer.current
    )
}