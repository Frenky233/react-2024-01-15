import { Review } from "../review/component";
import styles from './styles.module.scss'

export const Reviews = ({ reviewsId }) => {
   return (
      <ul className={styles.reviews}>
         {reviewsId.map((reviewId) => {
            return (
               <li>
                  <Review reviewId={reviewId} />
               </li>
            );
         })}
      </ul>
   );
}