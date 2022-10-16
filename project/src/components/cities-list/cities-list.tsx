const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function CitiesList(): JSX.Element {
  const CitiesItems = cities.map((city) =>(
    <li key={city} className="locations__item">
      <a className="locations__item-link tabs__item tabs__item--active" href="/">
        <span>{city}</span>
      </a>
    </li>
  ));

  return (
    <ul className="locations__list tabs__list">{CitiesItems}</ul>
  );
}

export default CitiesList;
