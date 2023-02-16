import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/property/property';
import NotFound from '../../components/not-found/not-found';
import {Reviews} from '../../types/review';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route';
import browserHistory from '../../browser-history';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type AppScreenProps = {
  reviews:Reviews;
}

function App({ reviews }: AppScreenProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
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
    </HistoryRouter>
  );
}

export default App;
