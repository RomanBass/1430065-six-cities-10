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

  const offersList = offersBySelectedCity
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
