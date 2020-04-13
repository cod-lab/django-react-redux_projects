import React, { Component, Fragment } from 'react';                  // { Component } = React.Component
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

import { Provider } from 'react-redux';                             // 'provider' for UI
import store from '../store';

import { Provider as AlertProvider } from 'react-alert';            // 'provider' for handling errs
import AlertTemplate from 'react-alert-template-basic';             // alert template

// Alert Options
const alertOptions ={
    timeout: 3000,                                                  // time in ms
    position: 'top center'                                          // position of displaying err msgs
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>                                {/* 'provider' connects redux to react, it wraps everything */}
                <AlertProvider template={AlertTemplate} {...alertOptions}>                                     {/* 'provider' for err handling */}
                    <Fragment>
                    <Header />
                    <div className="container">
                        <Dashboard />
                    </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));