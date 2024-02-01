import { Review } from "../review/component";
import styles from './styles.module.scss'

export const Reviews = ({ reviews }) => {
   return (
      <ul className={styles.reviews}>
         {reviews.map((review) => {
            return (
               <li>
                  <Review review={review} />
               </li>
            );
         })}
      </ul>
   );
}