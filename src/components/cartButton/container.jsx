import { useSelector } from 'react-redux';
import { selectProductTotalAmount } from '../../redux/ui/cart';
import { CartButton } from './component';

export const CartButtonContainer = ({}) =>{
    const amount = useSelector(selectProductTotalAmount);
    
    return <CartButton amount={amount} />;
};