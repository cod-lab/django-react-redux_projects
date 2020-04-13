import React, { Component, Fragment } from 'react';               // { Component } = React.Component
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

class App extends Component {
    render() {
        return (<Header />)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));