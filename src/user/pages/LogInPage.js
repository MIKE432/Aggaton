import React from 'react';
import { Link } from 'react-router-dom';
import LogInForm from '../components/logInComponent/LogInComponent'
import BannerHolder from '../../mode-guest/landing-page/BannerHolder/BannerHolder'
import Logo from '../../mode-guest/landing-page/Logo/Logo'


const LogInPage = () => {
    return (
        <BannerHolder>
            <Logo to='/' size='128' />
            <h1>Logowanie</h1>
            <LogInForm />
            <div>
                <ul className='header'>
                    <li>Nie możesz się zalogować? <Link to='/reset'>Odzyskaj dostęp do konta</Link>!</li>
                    <li>Nie masz konta? <Link to='/signin'>Zarejestruj się</Link>!</li>
                </ul>
            </div>
        </BannerHolder>
    )
}

export default LogInPage
