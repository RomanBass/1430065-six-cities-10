import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';

const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function CitiesList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();


  const CitiesItems = cities.map((city) =>(
    <li key={city} className="locations__item">
      <a onClick={(evt) => {
        evt.preventDefault();
        dispatch(changeCity(city));
      }}
      className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`} href="/"
      >
        <span>{city}</span>
      </a>
    </li>
  ));

  return (
    <ul className="locations__list tabs__list">{CitiesItems}
    </ul>
  );
}

export default CitiesList;
