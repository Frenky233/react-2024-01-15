import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/selector";
import { getDishById } from "../../redux/entities/dishes/thunks/getDishById";
import { selectIsLoading } from "../../redux/ui/request";
import { Dish } from "./component";

export const DishContainer = ({ dishId }) =>{
    const [requestId, setRequstId] = useState();
    const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));
    const dispatch = useDispatch();
    const dish = useSelector(state => selectDishById(state, dishId));
 
    useEffect(() =>{
       setRequstId(dispatch(getDishById(dishId)).requestId);
   }, [dispatch]);

   return (
    <>
        {isLoading ? (
            <div>Loading...</div>
            ) : (
                dish && <Dish dish={dish} />
            )
        }
    </>
   );
}