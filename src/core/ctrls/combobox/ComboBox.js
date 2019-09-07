import React, { Component } from 'react';
import styles from './ComboBox.module.scss';

class ComboBox extends Component {

    constructor( props ) {
        super( props );
        this.refComponent = React.createRef();
        this.refLabel = React.createRef();
        this.refSelect = React.createRef();

        this.handleFocus = () => {
            this.refComponent.current.classList.add(styles.editFocus);
            this.refLabel.current.classList.add(styles.labelFocus);
            this.refSelect.current.classList.add(styles.selectFocus);
        }

        this.handleBlur = () => {
            this.refComponent.current.classList.remove(styles.editFocus);
            if( !this.refSelect.current.value )
                this.refLabel.current.classList.remove(styles.labelFocus);
            this.refSelect.current.classList.remove(styles.selectFocus);
        }
    }

    render() {
        return (
        <div ref={this.refComponent} className={styles.component}>
            <label ref={this.refLabel} className={styles.label} htmlFor={this.props.name}>{this.props.label}</label>
            <select ref={this.refSelect} className={styles.value} type={this.props.type} name={this.props.name} onFocus={this.handleFocus} onBlur={this.handleBlur} >
                {this.props.children}
            </select>
        </div>
        );
    }    
}

export default ComboBox;

