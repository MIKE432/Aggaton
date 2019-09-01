import React from 'react';
import Styles from './LoginInput.module.scss'
import {Field} from 'formik'
class LoginInput extends React.Component {

    constructor(props) {
        super(props);
        this.refContainer = React.createRef();
        this.refLabel = React.createRef();
        this.refInput = React.createRef();

        this.onFocusLabel = () => {

            this.refContainer.current.classList.remove(Styles.onError)
            this.refInput.current.classList.remove(Styles.onErrorInput);
            
            this.refLabel.current.classList.add(Styles.LabelOnFocus);
            this.refInput.current.classList.add(Styles.InputOnFocus);
        }
    
        this.onBlurLabel = () => {
            
            if( !this.refInput.current.value )
                this.refLabel.current.classList.remove(Styles.LabelOnFocus);
            this.refInput.current.classList.remove(Styles.InputOnFocus);   
        }

        this.onError = () => {
            this.refContainer.current.classList.add(Styles.onError);
            this.refInput.current.classList.add(Styles.onErrorInput);
        }

        this.onAcceptInput = () => {
            this.refInput.current.classList.add(Styles.onAcceptInput);
        }
    }
    
    render() {
        return(
            <div ref = {this.refContainer} className = {Styles.Container}>
                <Field innerRef = {this.refInput} onFocus = {this.onFocusLabel} onBlur = {this.onBlurLabel} type = {this.props.type} name = {this.props.name}></Field>
                <label ref = {this.refLabel} htmlFor = {this.props.name}>{this.props.label}</label>
            </div>
        )
    }
}

export default LoginInput;