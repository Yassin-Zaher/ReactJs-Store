import React from 'react';
import "./sign-in.styles.scss";
import FormInput from '../input-form/input-form.component';
import CustomButton from '../custom-button/cutom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" type="email" name='email' onChange={this.handleChange} value={this.state.email} required />
                    <FormInput
                        type='password'
                        label='password'
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}

                    />
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleButton> Sign in with Gooogle </CustomButton>

                    </div>


                </form>
            </div>
        )
    }
}
export default SignIn;