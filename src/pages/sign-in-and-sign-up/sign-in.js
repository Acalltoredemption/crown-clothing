import React from 'react';
import './sign-in.scss';
import SignIn from '../../components/sign-in/signin';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (

    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>

);

export default SignInAndSignUpPage;