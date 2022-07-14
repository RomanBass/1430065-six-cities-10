import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  RENTAL_OFFERS_NUMBER: 5,
};

root.render(
  <React.StrictMode>
    <App rentalOffersNumber={Setting.RENTAL_OFFERS_NUMBER}/>
  </React.StrictMode>,
);
