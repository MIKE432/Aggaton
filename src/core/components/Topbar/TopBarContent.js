import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './TopBarContent.module.scss'

class TopBarContent extends React.Component {
    constructor(props) {
        super(props);

        this.TopBarContentRef = React.createRef();
        console.log(this.props);
    }

    render() {
        return(
            <div className={Styles.WholeTopBarContent} ref={this.TopBarContentRef}>
                <div onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-home fa-3x"></i>MainPage</div>
                <div onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-coins fa-3x"></i>Coins</div>
                <div onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-sign-in-alt fa-3x"></i>LogIn</div>
                <Link to = '/signin' onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-signature fa-3x"></i>SighIn</Link>
                <div onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-address-card fa-3x"></i>About Us</div>
            </div>
        )
    }
}

export default TopBarContent;