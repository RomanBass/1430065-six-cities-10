import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity', (city) => ({payload: city}));
export const fillOffers = createAction('fillOffers', (city) => ({payload: city}));
export const changeSortingOption = createAction('changeSortingOption', (sortingOption) => ({payload: sortingOption}));
export const sortOffers = createAction('sortOffers', (sortingOption) => ({payload: sortingOption}));
export const setSortingMenuVisibility = createAction('setSortingMenuVisibility');
