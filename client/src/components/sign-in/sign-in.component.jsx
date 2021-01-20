import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
    ButtonsContainer,
    SignInContainer,
    SignInTitle
} from './sign-in.styles';

const SignIn = () => {
    const [ userCredentials, setUserCredentials ] = useState({
        email: '',
        password: ''
    });

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { value, name } = event.target;

        setUserCredentials({...userCredentials, [name]: value });
    }

    return(
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="password"
                    required
                />
                <ButtonsContainer>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                        type='button'
                    >
                        Sign in with Google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignIn;