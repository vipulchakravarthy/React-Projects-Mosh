import React, { Component } from 'react';
import Input from './common/input';
class LoginForm extends Component {

    state = {
        account: {
            username: '',
            password: ''
        },
        errors: {}
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        console.log("submitted", errors)
        if(errors) return;
    }

    validate = () => {
        const errors = {}
        const {account} = this.state;
        if(account.username.trim() === ''){
            errors.username= 'Username is required'
        }
        if(account.password.trim() === ''){
            errors.password= 'password is required'
        }
        return Object.keys(errors).length === 0 ? null: errors    
    }

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({account})
    }
    render() {
        const {account} = this.state 
        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <Input 
                name="username"
                value={account.username}
                label="Username"
                onChange={this.handleChange}/>
                    <Input 
                    onChange={this.handleChange}
                    label="password"
                    value={account.password} name='password' />
                <button className="btn-primary">Login</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;