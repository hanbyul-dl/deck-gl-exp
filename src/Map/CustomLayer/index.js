/// app.js
import React, { Component } from 'react';
import DeckGL, { ScatterplotLayer } from 'deck.gl';

export default class CustomLayer extends Component {
  render() {
    if (this.props.layers) {
      return <DeckGL {...this.props.viewport} layers={this.props.layers} />;
    } else return null;
  }
  // ...
}
