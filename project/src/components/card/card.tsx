import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';

type CardProps = {
  offer: Offer;
  onListCardHover: (arg: number | null) => void;
}

function Card({ offer, onListCardHover }: CardProps): JSX.Element {

  const renderPremiumLabel = () => {
    if (offer.isPremium) {
      return (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      );
    } else {
      return null;
    }
  };

  const listCardHoverHandler = () => {
    onListCardHover(offer.id);
  };

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={listCardHoverHandler}
    >
      {renderPremiumLabel()}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${(offer.id).toString()}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">{offer.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${(offer.id).toString()}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>

  );
}

export default Card;
