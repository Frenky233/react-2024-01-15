import { ReviewContainer } from "../review/container";
import styles from './styles.module.scss'

export const Reviews = ({ reviewsId }) => {
   return (
      <ul className={styles.reviews}>
         {reviewsId.map((reviewId) => {
            return (
               <li key={reviewId}>
                  <ReviewContainer reviewId={reviewId} />
               </li>
            );
         })}
      </ul>
   );
}