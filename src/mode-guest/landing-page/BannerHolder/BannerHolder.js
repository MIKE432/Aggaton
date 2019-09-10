import React from 'react';
import styles from './BannerHolder.module.scss';

const BannerHolder = (props) => 
    <div className={styles.holder}>{props.children}</div>

export default BannerHolder;
