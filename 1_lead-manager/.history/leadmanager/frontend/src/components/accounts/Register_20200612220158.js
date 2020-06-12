import React, { Component } from 'react';

export class Register extends Component {

    state = {
    // adding state for each input
    // it is a componnent level state, it has nothing to do with Redux
        username: '',
        email: '',
        password: '',
        password2: ''                           // for password confirmation
    };

    render() {
        const { username, email, password, password2 } = this.state;            // getting data for 'from-value' from above state
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
                        <label>Email</label>
                        <input className="form-control" type="email" name="email" onChange={this.onChange} value={email} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="text" name="password" onChange={this.onChange} value={password} />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" type="text" name="password2" onChange={this.onChange} value={password2} />
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
