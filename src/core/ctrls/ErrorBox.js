import React, { Component } from 'react';
import styles from './ErrorBox.module.scss';

class ErrorBox extends Component {

    constructor( props ) {
        super( props );

        this.refComponent = React.createRef();

    }

    componentDidMount() {
        if( this.props.visible )
            this.refComponent.current.classList.add(styles.isVisible);
        if( this.props.popup )
            this.refComponent.current.classList.add(styles.isPopup);

        if(this.props.style)
            this.refComponent.current.classList.add(this.props.style)
    }

    render() {
        return (
            <div ref={this.refComponent} className={styles.errorBox}><div>{this.props.children}</div>{this.props.explaining || this.props.label}</div>
        );
    }    
    
}

export default ErrorBox;