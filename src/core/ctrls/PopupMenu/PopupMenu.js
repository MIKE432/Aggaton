import React from 'react';
import PopupContent from './PopupContent';
import Styles from './PopupMenu.module.scss';

class PopupMenu extends React.Component {
    
    render() {
        return (
            <>
                <div className={Styles.triggerComponent}>
                    {
                        this.props.triggerComponent
                    }
                    {
                        this.props.openContent ? <PopupContent popupContent={this.props.popupContent} /> : null
                    }
                </div>

                {
                    this.props.openContent ? <div className={Styles.contentBackground} onClick={this.props.close} /> : null
                }
            </>
        )
    }
}
//propsy: openConetent, 
export default PopupMenu