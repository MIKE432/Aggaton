import React, { Component } from 'react';
import { Field } from 'formik'
import styles from './Text.module.scss';
import ErrorBox from './ErrorBox'

class Edit extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            isFocused: false
        }

        this.refComponent = React.createRef();
        this.refLabel = React.createRef();
        this.refInput = React.createRef();

        this.handleFocus = () => {
            this.refComponent.current.classList.add(styles.editFocus);
            this.refLabel.current.classList.add(styles.labelFocus);
            this.setState({isFocused: true})
        }

        this.handleBlur = () => {
            this.refComponent.current.classList.remove(styles.editFocus);
            this.setState({isFocused: false})
            if( !this.refInput.current.value )
                this.refLabel.current.classList.remove(styles.labelFocus);
        }
    }

    componentDidMount() {
        if(this.refInput.current.value !== '') {
            this.handleFocus()
        }

        if(this.props.style) {
            this.refComponent.current.classList.add(this.props.style)
        }
    }


    render() {
        this.refInput.current && this.refInput.current.value === '' && this.refComponent.current.classList.remove(styles.errorStyle)
        !this.state.isFocused && this.props.error && this.refComponent.current.classList.add(styles.errorStyle)
        
        return (
        <>
            <div ref={this.refComponent} className={styles.component} >
                {
                    this.props.error && this.state.isFocused &&
                    <ErrorBox label={this.props.label} explaining={this.props.error.explaining} popup={true} visible={this.props.error} style={styles.errorBox}>
                        {this.props.error.header} <a href={this.props.error.href}>{this.props.error.hrefText}</a><br /><b>Numido</b>
                    </ErrorBox>
                }
                <label ref={this.refLabel} className={styles.label} htmlFor={this.props.name}>{this.props.label}</label>
                <Field innerRef={this.refInput} className={styles.value} type={this.props.type} name={this.props.name} onFocus={this.handleFocus} onBlur={this.handleBlur} />
            </div>
        </>
        );
    }    
}

export default Edit;