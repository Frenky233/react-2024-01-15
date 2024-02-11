import { useSelector } from "react-redux";
import { selectProductIds } from "../../redux/ui/cart";
import { Cart } from "./component";

export const CartContainer = ({ onClose }) =>{
    const productIds = useSelector(selectProductIds)
    
    return (
        <Cart productIds={productIds} onClose={onClose} />
    );
};