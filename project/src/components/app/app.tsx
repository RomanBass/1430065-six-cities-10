import { Browser, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';

type AppScreenProps = {
  rentalOffersNumber: number;
}

function App({rentalOffersNumber}: AppScreenProps): JSX.Element {
  return(
    <Main rentalOffersNumber={rentalOffersNumber}/>
  );
}

export default App;
