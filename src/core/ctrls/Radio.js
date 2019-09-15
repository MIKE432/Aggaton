import React from 'react'
import styles from './Radio.module.scss'

const Radio = props => 
    <label className={styles.container}>
        <input type='radio' name={props.name} />
        <span class={styles.label}>{props.children}</span>
        <span class={styles.radiomark}></span>
    </label>

export default Radio;