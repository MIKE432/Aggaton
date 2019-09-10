import React from 'react';
import BannerHolder from '../BannerHolder/BannerHolder';
import Logo from '../Logo/Logo';
import Button from '../../../core/ctrls/button/Button';
import styles from './BannerSection.module.scss';

const BannerSection = () => 
    <BannerHolder>
        <Logo size='512'/>
        <div>
            <Button to='/signin' mode='lp' style={{margin:'20px', width:'350px'}}>Zarejstruj się</Button>
            <Button to='/login' mode='lps' style={{margin:'20px', width:'350px'}}>Zaloguj się</Button>
        </div>
    </BannerHolder>

export default BannerSection;