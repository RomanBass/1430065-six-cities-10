import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// const Setting = {
//   RENTAL_OFFERS_NUMBER: 5,
// };

root.render(
  <React.StrictMode>
    <App
      rentalOffersNumber={offers.length}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
);
