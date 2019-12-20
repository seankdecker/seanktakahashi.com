import React, {Component, Fragment} from 'react';
import Landing from 'containers/Landing';
import {Route, HashRouter, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <Route exact path='/' render={(props) => <Landing {...props} />}/>
        <Route path='/other-sean' component={() => { 
          window.location.href = 'http://seankdecker.com'; 
          return null;
        }}/>
      </HashRouter>
    );
  }
  
}

export default App;
