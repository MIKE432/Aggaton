import React, { Component } from 'react';
import styles from './Combo.module.scss';

class Combo extends Component {

    constructor( props ) {
        super( props );
        this.refComponent = React.createRef();
        this.refLabel = React.createRef();
        this.refInput = React.createRef();

        this.handleFocus = () => {
            this.refComponent.current.classList.add(styles.editFocus);
            this.refLabel.current.classList.add(styles.labelFocus);
        }

        this.handleBlur = () => {
            this.refComponent.current.classList.remove(styles.editFocus);
            if( !this.refInput.current.value )
                this.refLabel.current.classList.remove(styles.labelFocus);
        }
    }

    render() {
        return (
        <div ref={this.refComponent} className={styles.component} style={this.props.style}>
            <label ref={this.refLabel} className={styles.label} htmlFor={this.props.name}>{this.props.label}</label>
            <input ref={this.refInput} className={styles.value} type={this.props.type} name={this.props.name} onFocus={this.handleFocus} onBlur={this.handleBlur} />
            <div className={styles.button}></div>
        </div>
        );
    }    
}

export default Combo;

