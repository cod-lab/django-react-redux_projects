import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
    // 'connect' is used to work with 'redux' from any 'component'(current file)
    // 'connect' is used to interact 'component' with 'redux'
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';                                         // we call 'login' when 'component' mounts (basically when calling fn 'componentDidMount')
    //import auth from '../../reducers';
    //import auth from '../../action';
export class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,                                           // creating a 'prop' 'auth'
        logout: PropTypes.func.isRequired                                            // creating a 'prop' 'logout'
    };

    //onClick = e => {<Redirect to='/login' />};
    
    fn2() {
        window.location.reload(false);
    }
    
    render() {
        const { isAuthenticated, user } = this.props.auth;

        const fn1 = (this.props.logout, this.fn2);
        // const fn2 = (window.location.reload(false));

        const authLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item"><button className="nav-link btn btn-info btn-sm text-light" onClick={this.fn2}>Logout</button></li>
            </ul>
        );
        //const { username, password } = null;

        const guestLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
                <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                {/* 'Link' imported from react-route-dom */}
                {/* 'Link' will add the given string to url by replacing the string succeeding default or home url and run the resultant url*/}
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">Lead Manager</a>
                    </div>
                        { isAuthenticated ? authLinks : guestLinks }
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({ auth: state.auth });
            // this will get state from 'leadmanger/frontend/src/reducers/auth.js'
    // this will map state to props of this component
    // 'isAuthenticated:' = 'prop' = created above, will get the state(value) from 'reducer'(leadmanager/frontend/src/reducers/auth.js)
    // 'state.auth' = 'state' = it is the auth reducer imported from 'leadmanger/frontend/src/reducers/index.js'
    // '.isAuthenticated' is the part of the state we want

export default connect(mapStateToProps, { logout })(Header);
    // sending 'prop' 'login' to 'action'(leadmanager/frontend/src/actions/auth.js) to get token from server(django) and log in
    // cls 'Login' is a 'component' here wrapped thru 'connect' using '()'
    // 'mapStateToProps' is giving the 'states' from 'leadmanger/frontend/src/reducers/index.js'
    // 'login' = 'prop' = created above
