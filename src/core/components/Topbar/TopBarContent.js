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
                <Link to = '/playground' onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-home fa-2x"></i>MainPage</Link>
                <div onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-coins fa-2x"></i>Coins</div>
                <div onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-sign-in-alt fa-2x"></i>LogIn</div>
                <Link to = '/signin' onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-signature fa-2x"></i>SighIn</Link>
                <div onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-address-card fa-2x"></i>About Us</div>
            </div>
        )
    }
}

export default TopBarContent;