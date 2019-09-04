import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './TopBarContent.module.scss'

class TopBarContent extends React.Component {
    constructor(props) {
        super(props);

        this.TopBarContentRef = React.createRef();
    }

    render() {
        return(
            <div className={Styles.WholeTopBarContent} ref={this.TopBarContentRef}>
                <Link to = '/playground' onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-home fa-2x"></i><span>Strona Główna</span></Link>
                <div onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-coins fa-2x"></i><span>Coins</span></div>
                <Link to = '/login' onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-sign-in-alt fa-2x"></i><span>Zaloguj</span></Link>
                <Link to = '/signin' onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-signature fa-2x"></i><span>Zarejestruj</span></Link>
                <div onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-address-card fa-2x"></i><span>O nas</span></div>
            </div>
        )
    }
}

export default TopBarContent;