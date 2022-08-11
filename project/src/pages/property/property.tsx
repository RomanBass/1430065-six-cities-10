import Logo from '../../components/logo/logo';
import { Offers } from '../../types/offer';
import { Reviews } from '../../types/review';
import { Navigate, useParams } from 'react-router-dom';
import Form from '../../components/form/form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import CardNearbyList from '../../components/offers-nearby-list/offers-nearby-list';
//import {offers} from '../../mocks/offers';

type RoomProps = {
  offers: Offers;
  reviews: Reviews;
}

function Property({ offers, reviews }: RoomProps): JSX.Element {
  const { id } = useParams();

  if (id) {

    const currentOffer = offers.find((offer) => offer.id === +id);

    if (!currentOffer) {
      return <Navigate to='*' />;
    }

    const renderedImages = currentOffer.images.map((image) =>
      (
        <div key={image} className="property__image-wrapper">
          <img className="property__image" src={image} alt="Studio" />
        </div>
      )
    );

    const renderedGoods = currentOffer.goods.map((good) =>
      <li key={good} className="property__inside-item">{good}</li>
    );

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <Logo />
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="/">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="/">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {renderedImages}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {currentOffer.isPremium ? <div className="property__mark"><span>Premium</span></div> : ''}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.bedrooms} {currentOffer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {currentOffer.maxAdults} {currentOffer.maxAdults > 1 ? 'adults' : 'adult'}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{currentOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {renderedGoods}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {currentOffer.host.name}
                    </span>
                    {currentOffer.host.isPro === true ? <span className="property__user-status">Pro</span> : ''}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

                  <ReviewsList reviews={reviews}/>

                  <Form onSubmitTest={(): void => {
                    throw new Error('Katrovsky Error - Function is not implemented.');
                  }}
                  />

                </section>
              </div>
            </div>

            <section className="property__map map">
              <Map city={offers[0].city} offers={offers.slice(1)} selectedOffer={undefined}/>
            </section>

          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>

              <CardNearbyList offers={offers.filter((offer) => offer !== currentOffer)} onListCardHover={() => null} className={'near-places__card place-card'} imageClassName={'near-places__image-wrapper place-card__image-wrapper'} starsSpanWidth={100}/>

            </section>
          </div>
        </main>
      </div>

    );
  } else {
    return <Navigate to='*' />;
  }
}

export default Property;
