import React, { Component, Fragment } from 'react';               // { Component } = React.Component
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

import { Provider } from 'react-redux';                           // provider for UI
import store from '../store';

import { Provider as AlertProvider } from 'react-alert';          // provider for handling errs
import AlertTemplate from 'react-alert-template-basic';

class App extends Component {
    render() {
        return (
            <Provider store={store}>                              {/* 'provider' connects redux to react, it wraps everything */}
                <Fragment>
                <Header />
                <div className="container">
                    <Dashboard />
                </div>
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));