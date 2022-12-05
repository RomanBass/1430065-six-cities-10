import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOffers, changeSortingOption, sortOffers } from './action';
import { offers } from '../mocks/offers';

const initialState = {
  activeCity: 'Paris',
  offersList: offers.filter((offer) => offer.city.name === 'Paris'),
  activeSortingOption: 'Popular',
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
    })
    .addCase(sortOffers, (state, action) => {
      if (action.payload === 'Price: high to low') {
        state.offersList.sort((a, b) => b.price - a.price);
      }
    });

});

export {reducer};
