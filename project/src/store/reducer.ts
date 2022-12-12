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
      switch (action.payload) {
        case 'Price: high to low':
          state.offersList.sort((a, b) => b.price - a.price);
          break;
        case 'Price: low to high':
          state.offersList.sort((a, b) => a.price - b.price);
          break;
        case 'Top rated first':
          state.offersList.sort((a, b) => b.rating - a.rating);
          break;
        case 'Popular':
          state.offersList.sort((a, b) => a.id - b.id);
          break;
      }
    })
    .addCase(setSortingMenuVisibility, (state) => {
      state.isSortingMenuVisible = !state.isSortingMenuVisible;
    });
});
export { reducer };
// .addCase(sortOffers, (state, action) => {
//   const popularOffers = state.offersList.slice();
//   switch (action.payload) {
//     case 'Price: high to low':
//       state.offersList.sort((a, b) => b.price - a.price);
//       break;
//     case 'Price: low to high':
//       state.offersList.sort((a, b) => a.price - b.price);
//       break;
//     case 'Top rated first':
//       state.offersList.sort((a, b) => b.rating - a.rating);
//       break;
//     case 'Popular':
//       state.offersList = popularOffers;
//       break;
//   }
