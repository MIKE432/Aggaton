import React from 'react'
import styles from './Toggle.module.scss'

const Check = props => 
    <label className={styles.container}>
        <input type='checkbox' name={props.name} />
        <span className={styles.label}>{props.children}</span>
        <span className={styles.togglemark}></span>
    </label>

export default Check;