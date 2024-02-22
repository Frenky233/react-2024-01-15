import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/selector";
import { selectUserById } from "../../redux/entities/users/selector";
import { Review } from "./component";

export const ReviewContainer = ({ reviewId }) => {
    const review = useSelector(state => selectReviewById(state, reviewId));
    const user = review && useSelector(state => selectUserById(state, review.userId));

    return (
        <>
            {user && <Review review={review} user={user}/>}
        </>
     );
  }