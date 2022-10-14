import {Offers} from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offers;
  onListCardHover:(arg:number|null) => void;
  className: string;
  imageClassName: string;
  starsSpanWidth: number;
}

function CardList({ offers, onListCardHover, className, imageClassName, starsSpanWidth}: CardListProps): JSX.Element {
  const offersList = offers
  // .filter((offer) => offer.city.name === 'Amsterdam')
    .map((offer) => <Card key={offer.id} offer={offer} onListCardHover={onListCardHover} className={className} imageClassName={imageClassName} starsSpanWidth={starsSpanWidth}/>);

  return (
    <div className="cities__places-list places__list tabs__content">{offersList}</div>
  );
}

export default CardList;
