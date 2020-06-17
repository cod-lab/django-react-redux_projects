import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';                                      
// 'connect' is used to work with 'redux' from any 'component'(current file)
// 'connect' is used to interact 'component' with 'redux'
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';                                         // we call 'login' when 'component' mounts (basically when calling fn 'componentDidMount')

export class Login extends Component {

    state = {
    // adding state for each input
    // it is a componnent level state, it has nothing to do with Redux
        username: '',
        password: ''
    };

    static propTypes = {
        login: PropTypes.func.isRequired,                                           // creating a 'prop' 'login'
        isAuthenticated: PropTypes.bool                                             // creating a 'prop' 'isAuthenticated' which is a boolean
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });             // creating event 'e', setting component level state

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
        // passing username & pass (stored in component state) to 'prop' 'login' which will sent it to 'action'(leadmanager/frontend/src/actions/auth.js)
    };

    render() {
        if (this.props.isAuthenticated)
            return <Redirect to='/' />;                                             // redirect to 'Dashboard' if user is logged in

        const { username, password } = this.state;                                  // getting data for 'from-value' from above state

        return (
            <div classNam="col-md-6 m-auto">
                <div classNam="card card-body mt-5">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input className="form-control" type="text" name="username" onChange={this.onChange} value={username} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" name="password" onChange={this.onChange} value={password} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div>
                        <p>Don't have an account? <Link to="/register">Register</Link></p> 
                        {/* 'Link' imported from react-route-dom */}
                        {/* 'Link' will add the given string to url by replacing the string succeeding default or home url and run the resultant url*/}
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated });
// this will get state from 'leadmanger/frontend/src/reducers/auth.js'
// this will map state to props of this component
    // 'isAuthenticated:' = 'prop' = declared above, will get the value from 'reducer'(leadmanager/frontend/src/reducers/auth.js)    current 'state' will be mapped into this 'prop'
// 'state.auth' = 'state' = it is the auth reducer imported from 'leadmanger/frontend/src/reducers/index.js'
// '.isAuthenticated' is the part of the state we want

export default connect(mapStateToProps, { login })(Login);
// sending 'prop' 'login' to 'action'(leadmanager/frontend/src/actions/auth.js) to get token from server(django) and log in
// cls 'Login' is a 'component' here wrapped thru 'connect' using '()'
// 'mapStateToProps' is giving the 'states' from 'leadmanger/frontend/src/reducers/index.js'
// 'login' is 'prop' here, created above
