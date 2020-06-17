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
        isAuthenticated: PropTypes.bool                                             // creating a 'prop' 'isAuthenticated'
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });             // creating event 'e', setting component level state

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
        // passing username & pass to 'prop' 'login' which will sent it to 'action'(leadmanager/frontend/src/actions/auth.js)
    };

    render() {
        if (this.props.isAuthenticated)
            return <Redirect to='/' />;

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
    // 'isAuthenticated:' = 'prop' = declared above, all 'states' mapped into this 'prop'
// 'state.auth' = 'state' = it is the auth reducer imported from 'leadmanger/frontend/src/reducers/index.js'
// '.isAuthenticated' = "initialState = { leads: [] };" from 'leadmanger/frontend/src/reducers/leads.js'
// '.isAuthenticated' is the part of the state we want

export default connect(mapStateToProps, { login })(Login);
// sending 'props' 'getLeads', 'deleteLead' to 'action'(leadmanager/frontend/src/actions/leads.js) to delete 'lead' from server(django) too
// cls 'Leads' is a 'component' here wrapped thru 'connect' using '()'
// 'mapStateToProps' is giving the 'states' from 'leadmanger/frontend/src/reducers/index.js'
// 'getLeads' & 'deleteLead' are 'props' here, created above
