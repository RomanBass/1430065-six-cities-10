import {Offers} from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offers;
  onListCardHover:(arg:number|null) => void;
}

function CardList({ offers, onListCardHover}: CardListProps): JSX.Element {
  const OffersList = offers.map((offer) => <Card key={offer.id} offer={offer} onListCardHover={onListCardHover} />);

  return (
    <div className="cities__places-list places__list tabs__content">{OffersList}</div>
  );
}

export default CardList;
