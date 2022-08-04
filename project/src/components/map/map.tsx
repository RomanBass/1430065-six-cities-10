//import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet';

import { useRef } from 'react';
import useMap from '../../hooks/useMap';

import {Offer} from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type MapProps = {
  offer: Offer;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {offer} = props;
  //const {city} = offer;
  const mapRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const map = useMap(mapRef, offer);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
