import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Login extends Component {

    state = {
    // adding state for each input
    // it is a componnent level state, it has nothing to do with Redux
        username: '',
        password: ''
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });             // creating event 'e', setting component level state

    onSubmit = e => {
        e.preventDefault();
        console.log('submit');
    };

    render() {
        const { username, password } = this.state;                                  // getting data for 'from-value' from above state

        return (
            <div classNam="col-md-6 m-auto">
                <div classNam="card card-body mt-5">
                    <h2 className="text-center">Register</h2>
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
                        <p>Already hvae an account? <Link to="/login">Login</Link></p>                  {/* 'Link' imported from react-route-dom */}
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
