import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const PointMap = ({latitude, longitude}) => {
  return (
    <YMaps>
      <Map
        state={{center: [latitude, longitude], zoom: 11, controls: ['zoomControl', 'fullscreenControl']}}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
        style={{flex: '1 1 100%'}}
      >
        <Placemark geometry={[latitude, longitude]}/>
      </Map>
    </YMaps>
  );
};

export default PointMap;