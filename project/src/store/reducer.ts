import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOffers } from './action';
import { offers } from '../mocks/offers';

const initialState = {
  activeCity: 'Paris',
  offersList: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fillOffers, (state) => {
      state.offersList = [];
    });

});

export {reducer};
