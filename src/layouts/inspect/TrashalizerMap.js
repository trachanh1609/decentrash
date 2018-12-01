import PropTypes from 'prop-types';
import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function TrashalizerMap({ className, zoom, position, sortingPoints, disposalzoom, children, ...props }) {
  if(!position)
    return null;

    var markers = [];
      sortingPoints.forEach( (sortingPoint) => {  
     /*if (product.parent !== lastParent) {
        /* Place into a temporary variable, then place inside NewPartRow 
        rows.push(
          <NewPartRow
            category={product.category}
            key={product.category} />
        );
      }*/
      markers.push(
        <Marker position={ [sortingPoint.lat, sortingPoint.lng] }>
        </Marker>
      );
      //lastCategory = product.category;
    });   


  return (
    <div className={`map ${className}`}>
    <Map center={position} zoom={zoom} maxZoom={14} minZoom={12}>
      <TileLayer
        attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        url='https://cdn.digitransit.fi/map/v1/{id}/{z}/{x}/{y}.png'
        maxZoom="14" id='hsl-map'
      />
      { markers }
    </Map>
    </div>
  );
}

TrashalizerMap.propTypes = {
  className: PropTypes.string,
  position: PropTypes.array,
  zoom: PropTypes.number,
  children: PropTypes.node,
};

TrashalizerMap.defaultProps = {
  className: '',
  position: [60.192059,24.945831],
  zoom: 13,
  children: undefined,
};

export default TrashalizerMap;