import React, { Component, Fragment } from 'react';                  // { Component } = React.Component
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';

import { Provider } from 'react-redux';                             // 'provider' for UI
import store from '../store';

import { Provider as AlertProvider } from 'react-alert';            // 'provider' for handling errs
import AlertTemplate from 'react-alert-template-basic';             // alert template

// Alert Options
const alertOptions = {
    timeout: 3000,                                                  // time in ms
    position: 'top center'                                          // position of displaying err msgs
};

class App extends Component {
    render() {
        return (
            <Provider store={store}>                                {/* 'provider' connects redux to react, it wraps everything */}
                <AlertProvider template={AlertTemplate} {...alertOptions}>        {/* 'provider' for err handling, adding 'alert template' to 'alert provider' */}
                    <Fragment>
                        <Header />                                  {/* component to display header on webpg */}
                        <Alerts />                                  {/* component to display msgs on webpg */}
                        <div className="container">
                            <Dashboard />                           {/* component to display main content(leads,form) of site on webpg */}
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));