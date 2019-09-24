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
                <Link to = '/' onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-home fa-2x"></i><span>Strona Główna</span></Link>
                <Link to='/coin' onClick = {this.props.hideTopBar} className={Styles.SingleContent}><i className="fas fa-coins fa-2x"></i><span>Coins</span></Link>
            </div>
        )
    }
}

export default TopBarContent;