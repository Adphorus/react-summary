import React, { Component } from 'react';

import Summary from '../src';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Summary items={['fatih', 'selam', 'naber', 'test']} />
      </div>
    );
  }
}
