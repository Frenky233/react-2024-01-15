import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/ui/request";
import { Reviews } from "./component";
import { getUsers } from "../../redux/entities/users/thunks/getUsers";
import { getReviewsByRestaurantId } from "../../redux/entities/reviews/thunks/getReviewsByRestaurantId";
import { selectRestaurantReviewsById } from "../../redux/entities/restaurants/selector";

export const ReviewsContainer = ({restaurantId}) => {
   const [requestId, setRequstId] = useState();
   const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));
   const dispatch = useDispatch();
   const reviewsId = useSelector(state => selectRestaurantReviewsById(state ,restaurantId));

   useEffect(() =>{
      setRequstId(dispatch(getUsers()).requestId);
      setRequstId(dispatch(getReviewsByRestaurantId(restaurantId)).requestId);
   }, [dispatch, restaurantId]);

   return (
      <>
         {isLoading ? (
            <div>Loading...</div>
         ) : (
            <Reviews reviewsId={reviewsId}/>
         )}
      </>
   );
}