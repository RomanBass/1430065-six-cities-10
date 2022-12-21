import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers, changeSortingOption, sortOffers, setSortingMenuVisibility } from './action';
import { offers } from '../mocks/offers';

const initialState = {
  activeCity: 'Paris',
  offersList: offers.filter((offer) => offer.city.name === 'Paris'),
  activeSortingOption: 'Popular',
  isSortingMenuVisible: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offersList = offers.filter((offer) => offer.city.name === action.payload);
    })
    .addCase(changeSortingOption, (state, action) => {
      state.activeSortingOption = action.payload;
      state.isSortingMenuVisible = false;
    })
    .addCase(sortOffers, (state, action) => {
      state.activeSortingOption = action.payload;
    })
    .addCase(setSortingMenuVisibility, (state) => {
      state.isSortingMenuVisible = !state.isSortingMenuVisible;
    });
});
export { reducer };
