import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
   return (
      <ul>
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