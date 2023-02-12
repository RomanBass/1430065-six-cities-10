import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type PrivateRouterProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
};

function PrivateRoute(props: PrivateRouterProps): JSX.Element {
  const { authorizationStatus, children } = props;

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <LoadingScreen />
    );
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.LoginPath} />
  );
}

export default PrivateRoute;
