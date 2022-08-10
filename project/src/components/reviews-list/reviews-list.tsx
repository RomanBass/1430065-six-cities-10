import { Reviews } from '../../types/review';
import ReviewItem from '../review/review';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const ReviewsItemsList = reviews.map((review) => <ReviewItem key={review.id} review={review}/>);

  return (
    <ul className="reviews__list">{ReviewsItemsList}</ul>
  );
}

export default ReviewsList;
