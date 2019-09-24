import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Register from './components/Register';
import Confirmation from './components/Confirmation';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/register" component={Register}/>
            <Route path="/confirmation" component={Confirmation}/>
          </Switch>
        </div>      
    );
  }
}

export default App;
