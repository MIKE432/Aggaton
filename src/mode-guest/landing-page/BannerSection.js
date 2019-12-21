import React from 'react';
import Logo from './Logo/Logo';
import Styles from './BannerSection.module.scss';

const BannerSection = () => 
    <div className={Styles.banner}>
        <div className={Styles.title}>Numizmatyczny Atlas Świata</div>
        <div className={Styles.subtitle}>Wszystkie numizmaty w jednym miejscu.<br />Zarejestruj się, przeglądaj, wyszukuj i pytaj ekspertów!<br /> Poznawaj zachwycający numizmatyczny świat!</div>
    </div>

export default BannerSection;