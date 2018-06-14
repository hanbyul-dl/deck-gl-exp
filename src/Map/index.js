/// app.js
import React, { Component } from 'react';
import DeckGL, { ScatterplotLayer, LineLayer } from 'deck.gl';
import MapGL from 'react-map-gl';
import rasterTileStyle from 'raster-tile-style';
import Immutable from 'immutable';

import CustomDeckLayer from './CustomLayer';
import './index.css';

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

const tileSource =
  'https://platform.descarteslabs.com/raster/v2/xyz/7a440c66f52bf87679cebbf6febaf3e32ab823b8/{z}/{x}/{y}.png';
// Immutable is not optional

const mapStyle = Immutable.fromJS(rasterTileStyle([tileSource]));
import taxiData from '../assets/taxi';

const PICKUP_COLOR = [0, 128, 255];
const DROPOFF_COLOR = [255, 0, 128];

class BaseMap extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 40.72,
      longitude: -73.99,
      zoom: 8
      //mapStyle: Immutable.fromJS(rasterTileStyle([tileSource]))
    }
  };

  componentDidMount() {
    this._processData();
    // ...
  }

  _processData() {
    if (taxiData) {
      this.setState({ status: 'LOADED' });
      const points = taxiData.reduce((accu, curr) => {
        accu.push({
          position: [
            Number(curr.pickup_longitude),
            Number(curr.pickup_latitude)
          ],
          pickup: true
        });
        accu.push({
          position: [
            Number(curr.dropoff_longitude),
            Number(curr.dropoff_latitude)
          ],
          pickup: false
        });
        return accu;
      }, []);
      this.setState({
        points,
        status: 'READY'
      });
    }
  }

  render() {
    const pointss = this.state.points;
    const layers = [
      new ScatterplotLayer({
        id: 'scatterplot',
        getPosition: d => d.position,
        getColor: d => (d.pickup ? PICKUP_COLOR : DROPOFF_COLOR),
        getRadius: d => 5,
        opacity: 0.7,
        pickable: true,
        radiusMinPixels: 2.25,
        radiusMaxPixels: 50,
        data: pointss
      })
    ];

    const lineLayer = [];

    return (
      <div className="map_wrapper">
        <MapGL
          {...this.state.viewport}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle={mapStyle}
          onViewportChange={viewport => this.setState({ viewport })}>
          <CustomDeckLayer layers={layers} viewport={this.state.viewport} />
        </MapGL>
      </div>
    );
  }
}

export default BaseMap;
