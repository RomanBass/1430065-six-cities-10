import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortingOption, sortOffers} from '../../store/action';

const options: string[] = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

function SortingOptions(): JSX.Element {
  const activeSortingOption = useAppSelector((state) => state.activeSortingOption);
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

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {SortingOptionItems}
    </ul>
  );
}

export default SortingOptions;
