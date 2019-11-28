import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styles from './Button.module.scss';

class Button extends Component {

    constructor( props ) {

        super( props );

        this.buttonRef = React.createRef();

        this.className 
            = this.props.mode==='primary' ? styles.primary
            : this.props.mode==='secondary' ? styles.secondary
            : this.props.mode==='warning' ? styles.warning
            : this.props.mode==='form' ? styles.form
            : this.props.mode==='lp' ? styles.lp
            : this.props.mode==='lps' ? styles.lps
            : styles.button;

        this.onClick = event => {

            if( this.props.to ) {
                event.preventDefault();
                this.props.history.push( this.props.to );
            } else if( this.props.onClick ) {

                this.props.onClick( event );
            }

        }
    }

    componentDidMount() {
        if(this.props.style) {
            this.buttonRef.current.classList.add(this.props.style)
        }
    }
    
    render() {
        return (
            <button ref={this.buttonRef} className={this.className} disabled={this.props.disabled} onClick={this.onClick} >{this.props.children}</button>
        );
    }    
}

export default withRouter( Button );