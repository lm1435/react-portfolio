import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Contact from './Contact';

export default class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 27.9345, lng: -82.4572
    },
    zoom: 13,
    options: {
      mapTypeControl: false,
      disableDoubleClickZoom: true,
      scrollwheel: false,
      disableDefaultUI: true,
      draggable: false,
      styles: [{
        elementType: 'geometry',
        stylers: [{
          color: '#242f3e'
        }]
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#242f3e'
        }]
      }, {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#746855'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#38414e'
        }]
      }, {
        featureType: "road",
        elementType: "labels",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "poi",
        elementType: "labels",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "transit",
        elementType: "all",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#746855'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#1f2835'
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#17263c'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#17263c'
        }]
      }]
    }
  }
  render() {
    return (
      <div>
        <div style={{ height: '600px', width: '100%'}} className='google-map'>
          <GoogleMapReact
            bootstrapURLKeys={{
                key: 'AIzaSyAHBoqUIgcGO-G7ckPcxpPhiZI2h-cXGcI'
            }}
            defaultCenter={ this.props.center }
            defaultZoom={ this.props.zoom }
            options = { this.props.options }
          >
          </GoogleMapReact>
        </div>
        <Contact />
      </div>
    )
  }
}