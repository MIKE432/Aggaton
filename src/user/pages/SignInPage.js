import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../components/singnInComponent/SignInForm'
import BannerHolder from '../../mode-guest/landing-page/BannerHolder/BannerHolder'
import Logo from '../../mode-guest/landing-page/Logo/Logo'


const SignInPage = () => {
    return (
        <BannerHolder>
            <Logo to='/' size='128' />
            <div className = 'sign-in-page'>
                <SignInForm />
            </div>
            <div>
                <ul className='header'>
                    <li>Posiadasz konto? <Link to='/login'>Zaloguj się</Link></li>
                </ul>
            </div>
       </BannerHolder>
    )
}

export default SignInPage
