import styles from './styles.module.scss'

export const Review = ({ review, user }) => {
   return (
      <div className={styles.review}>
         <div className={styles.reviewHeader}>
            <p>{user.name}</p>
            <p>{review.rating}</p>
         </div>
         <p className={styles.reviewText}>{review.text}</p>
      </div>
    );
 }