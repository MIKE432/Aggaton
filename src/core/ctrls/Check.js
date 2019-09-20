import React from 'react'
import styles from './Check.module.scss'

const Check = props => 
    <label className={styles.container}>
        <input type='checkbox' name={props.name} />
        <span className={styles.label}>{props.children}</span>
        <span className={styles.checkmark}></span>
    </label>

export default Check;