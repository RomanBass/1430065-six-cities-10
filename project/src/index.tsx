import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// const Setting = {
//   RENTAL_OFFERS_NUMBER: 5,
// };

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentalOffersNumber={offers.length}
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
);
