import React, { Component } from 'react'
import ProfileView from './components/ProfileView'
import Provider from './components/Provider';
class App extends Component {
  render() {
    return (
      <Provider>
        <ProfileView />
      </Provider>
        
    );
  }
}

export default App;
