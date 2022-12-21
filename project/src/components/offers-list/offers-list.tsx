import Card from '../card/card';
import {useAppSelector} from '../../hooks';

type CardListProps = {
  onListCardHover:(arg:number|null) => void;
  className: string;
  imageClassName: string;
  starsSpanWidth: number;
}

function CardList(
  { onListCardHover, className, imageClassName, starsSpanWidth}: CardListProps): JSX.Element {
  const offersBySelectedCity = useAppSelector((state) => state.offersList);
  const activeSortingOption = useAppSelector((state) => state.activeSortingOption);
  const sortedOffers = offersBySelectedCity.slice(0);

  if (activeSortingOption === 'Price: high to low') {
    sortedOffers.sort((a,b) => b.price - a.price);
  }

  if (activeSortingOption === 'Price: low to high') {
    sortedOffers.sort((a,b) => a.price - b.price);
  }

  if (activeSortingOption === 'Top rated first') {
    sortedOffers.sort((a,b) => b.rating - a.rating);
  }

  const offersList = sortedOffers
    .map((offer) => (
      <Card key={offer.id} offer={offer} onListCardHover={onListCardHover}
        className={className} imageClassName={imageClassName} starsSpanWidth={starsSpanWidth}
      />
    ));

  return (
    <div className="cities__places-list places__list tabs__content">{offersList}</div>
  );
}

export default CardList;
