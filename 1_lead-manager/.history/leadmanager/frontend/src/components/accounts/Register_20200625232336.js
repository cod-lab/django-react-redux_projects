import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// 'connect' is used to work with 'redux' from any 'component'(current file)
// 'connect' is used to interact 'component' with 'redux'
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

export class Register extends Component {

    state = {
    // adding state for each input
    // it is a component level state, it has nothing to do with Redux
        username: '',
        email: '',
        password: '',
        password2: ''                                                               // for password confirmation
    };

    static propTypes = {
        register: PropTypes.func.isRequired,                                        // creating a 'prop' 'login'
        isAuthenticated: PropTypes.bool                                             // creating a 'prop' 'isAuthenticated' which is a boolean
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });             // creating event 'e', setting component level state

    onSubmit = e => {
        e.preventDefault();

        const { username, email, password, password2 } = this.state;                // getting these values from current state i.e web
        
        if (password !== password2)                                                 // confirmation password must match
            this.props.createMessage({ passNotMatch: "Passwords do not match" });   // creating & passing the object
            // call variable 'createMessage' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
            // pass the data(object) to it's parameter 'msg' and,
            // dispatch(send) that variable to 'reducer'(leadmanager/frontend/src/reducers/messages.js)
        else {
            const newUser = { username, email, password };                          // passing user enetered details to 'action'(leadmanager/frontend/src/actions/auth.js)
            this.props.register(newUser);
        }
    };

    render() {
        if (this.props.isAuthenticated)
            return <Redirect to='/' />;                                             // redirect to 'Dashboard' if user is logged in

        const { username, email, password, password2 } = this.state;                // getting data for 'from-value' from above state

        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input className="form-control" type="text" name="username" onChange={this.onChange} value={username} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" type="email" name="email" onChange={this.onChange} value={email} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" name="password" onChange={this.onChange} value={password} />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input className="form-control" type="password" name="password2" onChange={this.onChange} value={password2} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Register</button>
                        </div>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
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
    // 'isAuthenticated:' = 'prop' = created above, will get the state(value) from 'reducer'(leadmanager/frontend/src/reducers/auth.js)
    // 'state.auth' = 'state' = it is the auth reducer imported from 'leadmanger/frontend/src/reducers/index.js'
    // '.isAuthenticated' is the part of the state we want

export default connect(mapStateToProps, { register, createMessage })(Register);
    // sending 'prop' 'login' to 'action'(leadmanager/frontend/src/actions/auth.js) to get token from server(django) and log in
    // cls 'Login' is a 'component' here wrapped thru 'connect' using '()'
    // 'mapStateToProps' is giving the 'states' from 'leadmanger/frontend/src/reducers/index.js'
    // 'login' = 'prop' = created above
