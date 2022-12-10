import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortingOption, sortOffers, setSortingMenuVisibility } from '../../store/action';

const options: string[] = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

function SortingOptions(): JSX.Element {
  const activeSortingOption = useAppSelector((state) => state.activeSortingOption);
  const isSortingMenuVisible = useAppSelector((state) => state.isSortingMenuVisible);
  const dispatch = useAppDispatch();

  const SortingOptionItems = options.map((sortingOption) => (
    <li key={sortingOption}
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(changeSortingOption(sortingOption));
        dispatch(sortOffers(sortingOption));
      }}
      className={`places__option ${activeSortingOption === sortingOption ? 'places__option--active' : ''}`}
      tabIndex={0}
    >
      {sortingOption}
    </li>
  ));

  const SortingOptionList = (
    <ul className="places__options places__options--custom places__options--opened">
      {SortingOptionItems}
    </ul>
  );

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(setSortingMenuVisibility());
        }}
        className="places__sorting-type"
        tabIndex={0}
      >
        {activeSortingOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="img/sprite.svg#icon-arrow-select"></use>
        </svg>
      </span>
      {isSortingMenuVisible ? SortingOptionList : ''}
    </form>
  );
}

export default SortingOptions;
