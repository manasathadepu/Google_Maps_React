import React, { useState, Fragment, FormEvent } from 'react';
import {
  useLoadScript
} from '@react-google-maps/api';
import DisplayMaps from './DisplayMaps';
import bixiStations from './bixiPlaces';
import DisplayList from './DisplayList';

const libraries: string[] =  ["places"];

export default function App() : JSX.Element {
  const [mapView, setMapView] = useState(true)

  // storing googleAPI key in .env.local instead of directly exposing it.
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if(loadError) return <div>Error loading map</div>
  if(!isLoaded) return  <div> Loading Maps </div>
 

  const handlingView = (event: FormEvent) => {
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

// this is the main logic where we will establish connection between
// google maps interface and display maps as intial view
