import 'leaflet/dist/leaflet.css';
import { Icon, Marker, LayerGroup } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
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

const defaultCity = {
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
  name: 'Amsterdam',
};

function Map(props: MapProps): JSX.Element {
  const { selectedOffer } = props;
  const mapRef = useRef(null);

  const offersBySelectedCity = useAppSelector((state) => state.offersList);
  const city = offersBySelectedCity[0]?.city || defaultCity;
  const map = useMap(mapRef, city);

  useEffect(() => {
    const layerMarkers = new LayerGroup();
    if (map) {

      map.panTo([city.location.latitude, city.location.longitude]);

      offersBySelectedCity.forEach((place) => {

        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });

        marker.setIcon(selectedOffer !== undefined && place.id === selectedOffer.id
          ? currentCustomIcon
          : defaultCustomIcon)
          .addTo(layerMarkers);

      });
      layerMarkers.addTo(map);
    }
    return () => {layerMarkers.remove();};
  }, [city, map, offersBySelectedCity, selectedOffer]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
