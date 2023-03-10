import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';

export const changeCity = createAction('changeCity', (city) => ({payload: city}));
export const fillOffers = createAction('fillOffers', (city) => ({payload: city}));
export const changeSortingOption = createAction('changeSortingOption', (sortingOption) => ({payload: sortingOption}));
export const sortOffers = createAction('sortOffers', (sortingOption) => ({payload: sortingOption}));
export const setSortingMenuVisibility = createAction('setSortingMenuVisibility');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<string>('redirectToRoute');

export const loadParticularOffer = createAction('data/loadParticularOffer', (id) => ({payload: id}));
export const setParticularOfferLoadedStatus = createAction<boolean>('data/setParticularOfferLoadedStatus');
