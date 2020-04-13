import React, { Component } from 'react';               // { Component } = React.Component
import ReactDOM from 'react-dom';

import header from './layout/Header';

class App extends Component {
    render() {
        return (<Header />)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));