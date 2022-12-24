import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offer';

export const changeCity = createAction('changeCity', (city) => ({payload: city}));
export const fillOffers = createAction('fillOffers', (city) => ({payload: city}));
export const changeSortingOption = createAction('changeSortingOption', (sortingOption) => ({payload: sortingOption}));
export const sortOffers = createAction('sortOffers', (sortingOption) => ({payload: sortingOption}));
export const setSortingMenuVisibility = createAction('setSortingMenuVisibility');
export const loadOffers = createAction<Offers>('data/loadOffers');
