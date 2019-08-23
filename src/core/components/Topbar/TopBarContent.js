import React from 'react';
import Styles from './TopBarContent.module.scss'

class TopBarContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={Styles.WholeTopBarContent}>
                <div className={Styles.SingleContent}><i class="fas fa-home fa-3x"></i>MainPage</div>
                <div className={Styles.SingleContent}><i class="fas fa-coins fa-3x"></i>Coins</div>
                <div className={Styles.SingleContent}>nothing</div>
                <div className={Styles.SingleContent}><i class="fas fa-sign-in-alt fa-3x"></i>LogIn</div>
                <div className={Styles.SingleContent}><i class="fas fa-signature fa-3x"></i>SighIn</div>
                <div className={Styles.SingleContent}><i class="fas fa-address-card fa-3x"></i>About Us</div>
            </div>
        )
    }
}

export default TopBarContent;