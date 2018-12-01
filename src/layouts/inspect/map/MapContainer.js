import PropTypes from 'prop-types';
import React from 'react';
//import connectToStores from 'fluxible-addons-react/connectToStores';

import LazilyLoad, { importLazy } from '../LazilyLoad';

import MyMap from './Map';

const mapModules = {
  Map: () => MyMap
};

function MapContainer({ className, children, ...props }) {
  return (
    <div className={`map ${className}`}>
      <LazilyLoad modules={mapModules}>
        {({ Map }) => <Map {...props} />}
      </LazilyLoad>
      <div className="background-gradient" />
      {children}
    </div>
  );
}

MapContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

MapContainer.defaultProps = {
  className: '',
  children: undefined,
};

/*
export default connectToStores(MapContainer, ['PreferencesStore'], context => ({
  lang: context.getStore('PreferencesStore').getLanguage(),
}));
*/