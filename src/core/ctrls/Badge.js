import React from 'react';
import Styles from './Badge.module.scss';

const badgeDefaultStyle = ({
    width: 'min-content',
    height: 'min-content',
    'border-radius': '10px',
    padding: '1px 2px'
})

const textDefaultStyle = ({
    'font-size': '14px'
})

const Badge = (props) => {
    const badgeStyles = 
        props.type === 'success' ? Styles.success :
        props.type === 'danger' ? Styles.danger :
        props.type === 'warning' ? Styles.warning :
        Styles.default;

    return (
        <div className={badgeStyles} ><span style={textDefaultStyle}>{props.children}</span></div>
    )
}

export default Badge;