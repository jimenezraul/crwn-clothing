import React from 'react';

import './sign-up.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/cutom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password don't match")
            return;
        }

    }
    
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}></form>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='text'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>Sign up</CustomButton>
            </div>
        )
    }
}

export default SignUp;
