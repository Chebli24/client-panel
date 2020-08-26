import React, { Component } from 'react';
import {BrowserRouter as Router, Rpute, Switch, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClients";
import ClientDetails from "./components/clients/ClientDetails";
import EditClient from "./components/clients/EditClient";

import './App.css'; 

class App extends Component{
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/client/add" component={AddClient} />
                <Route exact path="/client/edit/:id" component={EditClient} />
                <Route exact path="/client/:id" component={ClientDetails}/>
              </Switch>
            </div>
          </div> 
        </Router>
      </Provider>
    );
  }
}

export default App;
