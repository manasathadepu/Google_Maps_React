import React, { Component, useState } from 'react';
import { 
  GoogleMap,
  useLoadScript,
  Marker
} from '@react-google-maps/api';

const mapContainerStyle = {
  width:"100vw",
  height: "100vh"
}

const center = {
  lat: 45.508888,
  lng: -73.561668
}

const options = {
  disableDefaultUI : true,
  zoomControl: true
}

const DisplayMaps = (props) => {

    const {
        stations
    } = props;

    return <GoogleMap
    mapContainerStyle={mapContainerStyle}
    zoom={11}
    center={center}
    options={options}
  >
  {stations.map((station, index)=> (
    <Marker 
    key={ index }
    position={{lat:station.latitude,lng:station.longitude}}
    />
  ))
  }
  </GoogleMap>
}

export default DisplayMaps;