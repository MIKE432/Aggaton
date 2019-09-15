import React, { Component } from 'react';
import styles from './Combo.module.scss';

class Combo extends Component {

    constructor( props ) {
        super( props );
        this.refComponent = React.createRef();
        this.refLabel = React.createRef();
        this.refInput = React.createRef();


        this.state = {
            isDropdownVisible: false
        };

        this.showDropdown = () => {
            
            this.setState({ isDropdownVisible: true }, () => {

                document.addEventListener('click', this.onWindowClick);
            });        
        }

        this.hideDropdown = () => {

            this.setState({ isDropdownVisible: false }, () => {

                document.removeEventListener('click', this.onWindowClick);
            });
        }

        this.onButtonClick = event => {
            event.preventDefault();

            this.showDropdown();
        }

        this.onWindowClick = event => {

            this.hideDropdown();
        }

        this.onInputFocus = event => {

            this.refComponent.current.classList.add(styles.editFocus);
            this.refLabel.current.classList.add(styles.labelFocus);
        }

        this.onInputBlur = event => {

            this.refComponent.current.classList.remove(styles.editFocus);
            if( !this.refInput.current.value )
                this.refLabel.current.classList.remove(styles.labelFocus);
            if( this.state.isDropdownVisible )
                this.hideDropdown();
        }
    }

    render() {
        return (
        <div ref={this.refComponent} className={styles.component} style={this.props.style}>
            <label ref={this.refLabel} className={styles.label} htmlFor={this.props.name}>{this.props.label}</label>
            <input ref={this.refInput} className={styles.value} type={this.props.type} name={this.props.name} onFocus={this.onInputFocus} onBlur={this.onInputBlur} />
            <div className={styles.button} onClick={this.onButtonClick}></div>
            {
                this.state.isDropdownVisible 
                ?   (
                    <div className={styles.dropdown}>
                        {this.props.children}
                    </div>
                    )
                : ( null )
            }
        </div>
        );
    }    
}

export default Combo;

