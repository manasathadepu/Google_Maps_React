export interface Props {
    stations: Array<Stations>
  }

 export interface Stations{
    
      code: number,
      name: string,
      latitude: number,
      longitude: number
  }
  
     
 
  
  export interface MapContainerStyle {
    width: string,
    height: string
  }
  
  export interface Center {
    lat: number,
    lng: number
  }
  
  export interface Options {
    disableDefaultUI: boolean,
    zoomControl: boolean,
    style?: string
  }