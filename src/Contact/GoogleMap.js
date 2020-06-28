import React from 'react';
import GoogleMapReact from 'google-map-react';
import Contact from './Contact';

const GoogleMaps = () => {
  const API_KEY = process.env && process.env.REACT_APP_MAPS_API_KEY;
  const defaultProps = {
    center: {
      lat: 30.433167, lng: -97.683954,
    },
    zoom: 11,
    options: {
      mapTypeControl: false,
      disableDoubleClickZoom: true,
      scrollwheel: false,
      disableDefaultUI: true,
      draggable: false,
      styles: [{
        elementType: 'geometry',
        stylers: [{
          color: '#242f3e',
        }],
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#242f3e',
        }],
      }, {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#746855',
        }],
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#38414e',
        }],
      }, {
        featureType: 'road',
        elementType: 'labels',
        stylers: [{
          visibility: 'off',
        }],
      }, {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{
          visibility: 'off',
        }],
      }, {
        featureType: 'transit',
        elementType: 'all',
        stylers: [{
          visibility: 'off',
        }],
      }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#746855',
        }],
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#1f2835',
        }],
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#17263c',
        }],
      }, {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#17263c',
        }],
      }],
    },
  };

  return (
    <div id="contact">
      <div style={{ height: '600px', width: '100%' }} className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: API_KEY,
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          options={defaultProps.options}
        />
      </div>
      <Contact
        classname="contact"
      />
    </div>
  );
};

export default GoogleMaps;
