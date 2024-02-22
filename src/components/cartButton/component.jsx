import { useState } from "react";
import { Button } from "../button/component";
import styles from './styles.module.scss'
import { Modal } from "../modal/component";
import { CartContainer } from "../cart/container";

export const CartButton = ({ amount }) =>{
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button className={styles.cartButton} onClick={() => setShowModal(true)} size="l">Cart {amount}</Button>
            {showModal && <Modal onClose={() => setShowModal(false)}><CartContainer onClose={() => setShowModal(false)} /></Modal>}
        </>
    )
};