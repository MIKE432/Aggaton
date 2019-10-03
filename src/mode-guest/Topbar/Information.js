import React from 'react';
import Styles from './Information.module.scss'

const Information = (props) => {
    return (
        <div className={Styles.information}>
            <div>{props.informationType}</div>
            <div>{props.information}</div>
            <div>{props.date}</div>
        </div>
    )
}

export default Information;