import React from 'react';
import { 
  GoogleMap,
  Marker
} from '@react-google-maps/api';
import { Props, MapContainerStyle, Center, Options } from './interfaces';

const mapContainerStyle:MapContainerStyle = {
  width:"100vw",
  height: "100vh"
}

const center: Center = { //  default point is montreal
  lat: 45.508888,
  lng: -73.561668
}

const options: Options = {
  disableDefaultUI : true,
  zoomControl: true
}

const DisplayMaps = ({stations}: Props): JSX.Element => {

{/*displaying google maps with montreal as center  */} 
    return <GoogleMap
    mapContainerStyle={mapContainerStyle}
    zoom={11}
    center={center}
    options={options}
  >
    {/* ittarating station places array on map */}
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