import React from 'react';
import Styles from './PopupContent.module.scss';

class PopupContent extends React.Component {
    render() {
        return (
            <>
                <div className={Styles.popupContent}>
                <div className={Styles.triangle} />
                {
                    this.props.popupContent
                }
                </div>
            </>
        )
    }
}

export default PopupContent