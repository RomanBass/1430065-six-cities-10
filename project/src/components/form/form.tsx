import { STARS_RATING } from '../../const';
import { FormEvent, useState, Fragment, ChangeEvent } from 'react';

type FormProps = {
  onSubmitTest: () => void;
}

function Form(props: FormProps): JSX.Element {
  const { onSubmitTest } = props;

  const [formData, setFormData] = useState({ rating: 0, review: '' });

  const correctReview = (evt: ChangeEvent) => {
    setFormData({...formData, review: (evt.target as HTMLTextAreaElement).value});
  };

  const renderStars = STARS_RATING.map((rating) =>
    (
      <Fragment key={rating.starsNumber}>
        <input className="form__rating-input visually-hidden" name="rating" value={rating.starsNumber} id={`${rating.starsNumber}-stars`} type="radio"
          checked={formData.rating === rating.starsNumber}
          onChange={() => {
            setFormData({ ...formData, rating: rating.starsNumber });
          }}
        />
        <label htmlFor={`${rating.starsNumber}-stars`} className="reviews__rating-label form__rating-label" title={rating.description}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </Fragment>
    ));

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onSubmitTest();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {renderStars}
      </div>

      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={correctReview}
        value={formData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
