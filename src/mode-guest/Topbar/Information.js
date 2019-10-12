import React from 'react';
import Styles from './Information.module.scss'

const Information = (props) => {
    return (
        <div className={Styles.information}>
            <div className={Styles.informationDetails} >
                <div className={Styles.informationHeader}>
                    <div>{props.information}</div>
                </div>
                <div className={Styles.informationBody}>
                    <div>{props.details}</div>
                </div>
            </div>
            <div className={Styles.dateAndType}>
                <div>{props.informationType}</div>
                <div className={Styles.informationDate}>{props.date}</div>
            </div>

        </div>
    )
}

export default Information;