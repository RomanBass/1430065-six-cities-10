import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers, changeSortingOption, sortOffers,
  setSortingMenuVisibility, loadOffers, loadParticularOffer, setDataLoadedStatus, requireAuthorization } from './action';
import { Offers, Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';

type InitialState = {
  activeCity: string,
  offersList: Offers,
  activeSortingOption: string,
  isSortingMenuVisible: boolean,
  offers: Offers,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  particularOffer: Offer | null;
}

const initialState: InitialState = {
  activeCity: 'Paris',
  offersList: [],
  activeSortingOption: 'Popular',
  isSortingMenuVisible: false,
  offers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  particularOffer: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.offersList = state.offers.filter((offer) => offer.city.name === initialState.activeCity);
    })
    .addCase(loadParticularOffer, (state, action) => {
      state.particularOffer = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offersList = state.offers.filter((offer) => offer.city.name === action.payload);
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
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
export { reducer };
