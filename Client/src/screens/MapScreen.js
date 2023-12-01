import React from 'react'
import rating from '../images/rating.png'
import GoogleMapReact from 'google-map-react';
import pharmdata from '../PharmacyData'
import pMarker from '../images/Pharm Marker.png';
import uniMarker from '../images/Uni Marker.png'


const MapScreen = () => {

  const coords={lat:42.3398106,lng:-71.0913604};
  // const [childClicked, setChildClicked] = useState(null);

  const data =()=>{
    return(pharmdata)
}
  
  
  

  return (
    <div className="MapScreen">
    <div className="Pharmas">
      <div className="Header">
        <h1>Pharmacies Near You</h1>
      </div>
      <div className="Cards">
      {data().map((data,i)=> 
        <div className="Card">
          <div className="header">
            <div className="head">
              <p className="CardTitle">{data.title}</p>
              <p className="CardSubTitle">{data.type}</p>
            </div>
            <div className="rating">
              <p>{data.rating}</p>
              <img src={rating} alt="Star" />
            </div>
          </div>
          <div className="address">
            <h3 className="title">Address</h3>
            <p className="content">{data.address}</p>
          </div>
          <div className="details">
            <div className="hours">
              <h3 className="title">Hours</h3>
              <p className="content">{data.hours}</p>
            </div>
            <div className="phone">
              <h3 className="title">Phone</h3>
              <p className="content">{data.phone}</p>
            </div>
          </div>
          <a target="_blank" href={`http://maps.google.com/maps?z=12&t=m&q=loc:${data.lat}+${data.long}`} rel="noreferrer">Get Directions</a>
        </div>
      )}
      </div>
    </div>
    <div className="map">
    <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true}}
        // onChildClick={(child) => setChildClicked(child)}
      >
        {
          data().map((data,i)=>
            <div 
            className="locMarker"
            lat={data.lat}
            lng={data.long}
            key={i}>
            <img src={pMarker} alt="pMarker" />
            </div>
          )
        }
        <div 
            className="uniMarker"
            lat={coords.lat}
            lng={coords.lng}>
            <img src={uniMarker} alt="uniMarker" />
        </div>
      </GoogleMapReact>
    </div>
      
    </div>
  )
}

export default MapScreen