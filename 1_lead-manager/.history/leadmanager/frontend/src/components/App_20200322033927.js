import React, { Component } from 'react';               // { Component } = React.Component
import ReactDOM from 'react-dom';

import Header from './layout/Header';

class App extends Component {
    render() {
        return (<header />)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));