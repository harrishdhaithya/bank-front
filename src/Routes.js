import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import App from "./App";
import Customers from './Customers';
import Transaction from './Transaction';
import View from './View';
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <App/>
                </Route>
                <Route exact path="/customers">
                    <Customers/>
                </Route>
                <Route exact path="/transaction">
                    <Transaction/>
                </Route>
                <Route exact path = "/view">
                    <View/>
                </Route>
            </Switch>
        </Router>
        
    );
}

export default Routes;
