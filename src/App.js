import React, {Component, Fragment} from 'react';
import Landing from 'containers/Landing';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => <Landing {...props} />}/>
          <Route path='/other-sean' component={() => { 
            window.location.href = 'http://seankdecker.com'; 
            return null;
          }}/>
        </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
