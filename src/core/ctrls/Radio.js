import React from 'react'
import styles from './Radio.module.scss'

const Radio = props => 
    <label className={styles.container}>
        <input type='radio' name={props.name} />
        <span className={styles.label}>{props.children}</span>
        <span className={styles.radiomark}></span>
    </label>

export default Radio;