import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity', (city) => ({payload: city}) );
export const fillOffers = createAction('fillOffers', (city) => ({payload: city}));
