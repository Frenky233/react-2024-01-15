import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/selector";
import { Dish } from "./component";

export const DishContainer = ({ dishId }) =>{
    const dish = useSelector(state => selectDishById(state, dishId));

   return (dish && <Dish dish={dish} />);
}