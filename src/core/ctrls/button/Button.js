import React, { Component } from 'react';
import styles from './Button.module.scss';

const Button = (props) => 
    <button className={styles.button} {...props} >{props.children}</button>

export default Button