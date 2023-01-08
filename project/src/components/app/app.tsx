import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/property/property';
import NotFound from '../../components/not-found/not-found';
import {Reviews} from '../../types/review';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';

type AppScreenProps = {
  reviews:Reviews;
}

function App({ reviews }: AppScreenProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.RootPath} element={<Main/>} />
        <Route path={AppRoute.LoginPath} element={<Login />} />
        <Route path={AppRoute.FavoritesPath} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.OfferPath} element={<Room offers={offers} reviews={reviews}/>} />
        <Route path={AppRoute.WrongPath} element={<NotFound />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
