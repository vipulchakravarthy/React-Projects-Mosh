import React, { Component } from 'react';

class LoginForm extends Component {

    state = {
        account: {
            username: '',
            password: ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        console.log("submitted")
    }
    render() { 
        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                <input autoFocus id='username' type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id='password' type="text" className="form-control"/>
                </div>
                <button className="btn-primary">Login</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;