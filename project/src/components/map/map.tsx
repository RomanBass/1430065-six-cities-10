import 'leaflet/dist/leaflet.css';
import { Icon, Marker} from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import {Offer} from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import { useAppSelector } from '../../hooks';

type MapProps = {
  selectedOffer: Offer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

function Map(props: MapProps): JSX.Element {
  const {selectedOffer} = props;
  const mapRef = useRef(null);

  //const activeCity = useAppSelector((state) => state.activeCity);

  const offersBySelectedCity = useAppSelector((state) => state.offersList);

  const map = useMap(mapRef, offersBySelectedCity[0].city);

  useEffect(() => {

    if (map) {
      offersBySelectedCity.forEach((property) => {
        const marker = new Marker({
          lat: property.location.latitude,
          lng: property.location.longitude,
        });

        marker.setIcon(selectedOffer !== undefined && property.id === selectedOffer.id
          ? currentCustomIcon
          : defaultCustomIcon)
          .addTo(map);
      });
    }

  }, [map, offersBySelectedCity, selectedOffer]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
