import React, { useState, Fragment } from 'react';
import {
  useLoadScript
} from '@react-google-maps/api';
import DisplayMaps from './DisplayMaps';
import bixiStations from './bixiPlaces';
import DisplayList from './DisplayList';

const libraries =  ["places"];

export default function App() {
  const [mapView, setMapView] = useState(true)

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";
 

  const handlingView = (event) => {
    event.preventDefault();
    setMapView(!mapView);
  }

  return <Fragment>
    <div> 
      <h1>
        <span 
          aria-label="list view of stations"
          onClick = {(event)=> handlingView(event)}
        >
          {mapView ? "List View" : "Map View"}
        </span>
      </h1>
      {
        mapView ? <DisplayMaps stations= {bixiStations}/> : <DisplayList stations= {bixiStations}/>
      }
    
    </div>
  </Fragment>
}