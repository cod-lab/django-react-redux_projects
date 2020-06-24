import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Register extends Component {

    state = {
    // adding state for each input
    // it is a component level state, it has nothing to do with Redux
        username: '',
        email: '',
        password: '',
        password2: ''                                                               // for password confirmation
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });             // creating event 'e', setting component level state

    onSubmit = e => {
        e.preventDefault();
        console.log('submit');
    };

    render() {
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

export default Register
