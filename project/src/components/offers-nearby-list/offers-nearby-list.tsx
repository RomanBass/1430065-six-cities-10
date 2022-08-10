import {Offers} from '../../types/offer';
import CardNearby from '../../components/card-nearby/card-nearby';

type CardNearbyListProps = {
  offers: Offers;
  onListCardHover:(arg:number|null) => void;
  className: string;
  imageClassName: string;
  starsSpanWidth: number;
}

function CardNearbyList({ offers, onListCardHover, className, imageClassName, starsSpanWidth}: CardNearbyListProps): JSX.Element {
  const OffersNearbyList = offers.map((offer) => <CardNearby key={offer.id} offer={offer} onListCardHover={onListCardHover} className={className} imageClassName={imageClassName} starsSpanWidth={starsSpanWidth}/>);

  return (
    <div className="near-places__list places__list">{OffersNearbyList}</div>
  );
}

export default CardNearbyList;
