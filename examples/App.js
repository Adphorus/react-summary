import React, { Component } from 'react';

import Summary from '../src';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Summary items={['hey', 'foo', 'bar', 'selam']}
               max={3}
               preventSingleRemaining={false}
               onShowOthers={this.showOthers} />
      </div>
    );
  }
}
