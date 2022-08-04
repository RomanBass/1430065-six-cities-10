//import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import useMap from '../../hooks/useMap';

import {Offer} from '../../types/offer';

type MapProps = {
  offer: Offer;
}

function Map(props: MapProps): JSX.Element {
  const {offer} = props;
  //const {city} = offer;
  const mapRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const map = useMap(mapRef, offer);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
