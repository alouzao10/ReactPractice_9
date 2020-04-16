import React, { Component } from 'react';

import { AppProvider } from './Context/AppContext';

import Person from './Components/Person';
import Family from './Components/Family';

class App extends Component {



  render() {
    return (
      <AppProvider>
        <div>
          <h1>This is the App...</h1>
          <Family />
        </div>
      </AppProvider>
    )
  }
}

export default App;

