import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styles from './Logo.module.scss';

class Logo extends Component {

    constructor(props) {
        super(props);

        this.onClick = event => {

            if( this.props.to ) {
                event.preventDefault();
                this.props.history.push( this.props.to );
            }
        }
    }

    render() {
        return (
        <div className={styles.logo} onClick={this.onClick}>
            <div className={this.props.size===512 ? styles.logo512 : (this.props.size===256 ? styles.logo256 : styles.logo128)}></div>
            <div className={styles.title}><span>Apusart</span> Numido</div>
        </div>
        )
    }
}

export default withRouter( Logo );