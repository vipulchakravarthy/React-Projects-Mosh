import React from 'react';
import Joi from 'joi-browser';

import Input from './common/input';
import Form from './common/form';

class LoginForm extends Form {

    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {}
    }
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }
    
    doSubmit = () => {
        console.log("submitted")
    }    
    render() {
        const {data, errors} = this.state 
        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <Input 
                name="username"
                value={data.username}
                label="Username"
                onChange={this.handleChange}
                error ={errors.username}
                />

                    <Input 
                    onChange={this.handleChange}
                    label="password"
                    value={data.password} name='password'
                    error={errors.password} />
                <button 
                disabled={this.validate()}
                className="btn-primary">Login</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;