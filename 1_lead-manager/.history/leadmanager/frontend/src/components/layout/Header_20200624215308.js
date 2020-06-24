import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// 'connect' is used to work with 'redux' from any 'component'(current file)
// 'connect' is used to interact 'component' with 'redux'
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';                                        // we call 'action' 'logout' on clicking logout btn

export class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,                                          // creating a 'prop' 'auth'
        logout: PropTypes.func.isRequired                                           // creating a 'prop' 'logout'
    };

    onClick => {
        //e.preventDefault();
        //console.log('submit');
        this.props.logout;
        window.location.reload(false);
    };

    //fn4() {return <Redirect to='/login' />;}
    // static fn3 = (this.props.logout);
    // fn2() { window.location.reload(false); }
    //fn3() { const x =(this.props.logout); }
    //const x =(this.props.logout);
    //fn1() { const fn3 = (this.props.logout); window.location.reload(false); } 
    // constructor(props) {
    //     super(props);
    //     this.x = this.x.bind(this);
    // }
    // x = () => {
    //     this.props.logout;
    // }

    render() {
        const { isAuthenticated, user } = this.props.auth;                          // 'isAuthenticated' is getting value from current state of website

        // const fn3 = (this.props.logout);
        // const fn2 = (window.location.reload(true));
        // const fn1 = (fn3,fn2);

        const authLinks = (                                                         // variable to be displayed on web when logged in
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item"><button className="nav-link btn btn-info btn-sm text-light" onClick={this.onClick}>Logout</button></li>
            </ul>
        );
        //const { username, password } = null;

        const guestLinks = (                                                        // variable to be displayed on web when logged out
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
                        { isAuthenticated ? authLinks : guestLinks }                {/* if 'isAuthenticated' is true then 'authlinks' otherwise 'guestLinks' yo be displayed */}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({ auth: state.auth });
// this will get state from 'leadmanger/frontend/src/reducers/auth.js'
// this will map state to props of this component
// 'auth:' = 'prop' = created above, will get the state(value) from 'reducer'(leadmanager/frontend/src/reducers/auth.js)
// 'state.auth' = it is the auth reducer imported from 'leadmanger/frontend/src/reducers/index.js'

export default connect(mapStateToProps, { logout })(Header);
// connecting/sending 'prop' 'logout' to 'action'(leadmanager/frontend/src/actions/auth.js) to remove current user token from server(django)
// 'mapStateToProps' is giving the 'states' 'auth' from 'leadmanger/frontend/src/reducers/index.js'
// 'logout' = 'prop' = created above
// cls 'Header' is a 'component' here wrapped with redux store's state(leadmanager/frontend/src/reducers/auth.js) & 'action' 'logout' thru 'connect' using '()'
