import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BannerSection.module.scss';

const BannerSection = () => 
    <div className={styles.banner}>
        <div className={styles.logo}></div>
        <div>
            <Link to='/signin'><span className={styles.button}>Zarejstruj się</span></Link>
            <Link to='/login'><span className={styles.button}>Zaloguj się</span></Link>
        </div>
    </div>

export default BannerSection;