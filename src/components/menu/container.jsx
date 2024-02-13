import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantMenuById } from "../../redux/entities/restaurants/selector";
import { getDishesByRestaurantId } from "../../redux/entities/dishes/thunks/getDishesByRestaurantId";
import { Menu } from "./component";
import { selectIsLoading } from "../../redux/ui/request";

export const MenuContainer = ({ restaurantId }) => {
    const [requestId, setRequstId] = useState();
    const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));
    const dispatch = useDispatch();
    const dishIds = useSelector(state => selectRestaurantMenuById(state, restaurantId));

    useEffect(() =>{
        setRequstId(dispatch(getDishesByRestaurantId(restaurantId)).requestId);
    }, [dispatch, restaurantId]);

    return (
    <>
        {isLoading ? (
            <div>Loading...</div>
        ) : (
            <Menu dishIds={dishIds} />
        )}
    </>
    );
}