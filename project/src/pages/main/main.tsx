import CardList from '../../components/offers-list/offers-list';
import Logo from '../../components/logo/logo';
import { useState } from 'react';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer';
import CitiesList from '../../components/cities-list/cities-list';
import SortingOptions from '../../components/sorting-optiones/sorting-options';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';

function Main(): JSX.Element {

  const offers = useAppSelector((state) => state.offers);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onListCardHover = (listCardId: number | null) => {
    const currentOffer = offers.find((offer) => offer.id === listCardId);
    setSelectedOffer(currentOffer);
  };

  const offersBySelectedCity = useAppSelector((state) => state.offersList);
  const activeCity = useAppSelector((state) => state.activeCity);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const renderSignInArea = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      return (
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
      );
    } else {
      return (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="/">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </a>
          </li>
        </ul>
      );
    }
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              {renderSignInArea()}
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersBySelectedCity.length} places to stay in {activeCity}</b>
              <SortingOptions />
              <CardList onListCardHover={onListCardHover} className={'cities__card place-card'}
                imageClassName={'cities__image-wrapper place-card__image-wrapper'} starsSpanWidth={80}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map selectedOffer={selectedOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
