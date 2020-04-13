import React, { Component } from 'react';
import { connect } from 'react-redux';                                      // 'connect' is used to work with 'redux' from any 'component'(current file)
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';


export class Form extends Component {

    state = {
        name: '',
        email: '',
        message: ''
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });             // creating event 'e'

    onSubmit = e => {
        e.preventDefault();
        const { name, email, message } = this.state;                                // pulling name,email,message from back(probably reducer)

    };

    render() {
        const { name, email, message} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" name="name" onChange={this.onChange} value={name} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" name="email" onChange={this.onChange} value={email} />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" type="text" name="message" onChange={this.onChange} value={message} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addLead })(Form);
