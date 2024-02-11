import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/ui/request";
import { getReviews } from "../../redux/entities/reviews/thunks/getReviews";
import { Reviews } from "./component";
import { getUsers } from "../../redux/entities/users/thunks/getUsers";

export const ReviewsContainer = ({reviewsId, restaurantId}) => {
   const [requestId, setRequstId] = useState();
   const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));
   const dispatch = useDispatch();

   useEffect(() =>{
      setRequstId(dispatch(getReviews(restaurantId)).requestId);
   }, [dispatch]);

   useEffect(() =>{
      setRequstId(dispatch(getUsers()).requestId);
   }, [dispatch]);

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