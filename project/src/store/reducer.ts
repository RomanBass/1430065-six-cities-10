import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOffers } from './action';
import { offers } from '../mocks/offers';

const initialState = {
  city: offers[0].city.name,
  offersList: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state) => {
      state.city = 'Zero City';
    })
    .addCase(fillOffers, (state) => {
      state.offersList = [];
    });

});

export {reducer};
