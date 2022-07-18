import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/property/property';
import NotFound from '../../components/not-found/not-found';

import { AppRoute, } from '../../const';

type AppScreenProps = {
  rentalOffersNumber: number;
}

function App({ rentalOffersNumber }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.RootPath} element={<Main rentalOffersNumber={rentalOffersNumber} />} />
        <Route path={AppRoute.LoginPath} element={<Login />} />
        <Route path={AppRoute.FavoritesPath} element={<Favorites />} />
        <Route path={AppRoute.OfferPath} element={<Room />} />

        <Route path={AppRoute.WrongPath} element={<NotFound />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
