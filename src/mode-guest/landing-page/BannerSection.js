import React from 'react';
import BannerHolder from './BannerHolder/BannerHolder';
import Logo from './Logo/Logo';
import Button from '../../core/ctrls/Button';
import Styles from './BannerSection.module.scss';

const BannerSection = () => 
    <BannerHolder>
        <Logo size='512'/>
        <div className={Styles.buttonsContainer}>
            <Button to='/signin' mode='lp' style={Styles.button}>Zarejstruj się</Button>
            <Button to='/login' mode='lps' style={Styles.button}>Zaloguj się</Button>
        </div>
    </BannerHolder>

export default BannerSection;