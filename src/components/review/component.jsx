import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/selector";
import styles from './styles.module.scss'
import { selectUserById } from "../../redux/entities/users/selector";

export const Review = ({ reviewId }) => {
   const review = useSelector(state => selectReviewById(state, reviewId));
   
   return (
      <div className={styles.review}>
         <div className={styles.reviewHeader}>
            <p>{useSelector(state => selectUserById(state, review.userId)).name}</p>
            <p>{review.rating}</p>
         </div>
         <p className={styles.reviewText}>{review.text}</p>
      </div>
    );
 }