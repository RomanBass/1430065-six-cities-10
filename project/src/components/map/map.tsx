import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
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

function Map(props: MapProps): JSX.Element {
  const { selectedOffer } = props;
  const mapRef = useRef(null);

  const offersBySelectedCity = useAppSelector((state) => state.offersList);

  const map = useMap(mapRef, offersBySelectedCity[0].city);
  const emptyMarker = new Marker({
    lat: 0,
    lng: 0,
  });
  const markersRef = useRef([{currentMarker: emptyMarker, currentCity: offersBySelectedCity[0].city.name}]);

  useEffect(() => {

    if (map) {

      map.panTo([offersBySelectedCity[0].city.location.latitude, offersBySelectedCity[0].city.location.longitude]);

      offersBySelectedCity.forEach((property) => {
        const marker = new Marker({
          lat: property.location.latitude,
          lng: property.location.longitude,
        });

        marker.setIcon(selectedOffer !== undefined && property.id === selectedOffer.id
          ? currentCustomIcon
          : defaultCustomIcon)
          .addTo(map);

        markersRef.current.push({currentMarker: marker, currentCity: offersBySelectedCity[0].city.name});

        let prevMarkers = markersRef.current.filter((elem) => elem.currentCity !== offersBySelectedCity[0].city.name);

        prevMarkers.forEach((prevMarker) => {
          map.removeLayer(prevMarker.currentMarker);
          markersRef.current = markersRef.current.filter((elem) => elem.currentCity !== prevMarker.currentCity);
        });

        prevMarkers = [];

        //eslint-disable-next-line no-console
        console.log(markersRef.current);

      });
    }
  }, [map, offersBySelectedCity, selectedOffer]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
