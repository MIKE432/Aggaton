import React from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import Crypto from 'crypto-js';
import LogInInput from '../../../core/components/inputs/LogInInput'
import { saveUser } from '../../actions/actions'
import { reset } from 'ansi-colors';

const mapDispatchToProps = dispatch => ({
    saveUser: user => dispatch(saveUser(user))
})

class SignInForm extends React.Component {

    onSubmit = (formikValues, {resetForm}) => {
        const values = {...formikValues}
        values.password = Crypto.SHA256('sha256').toString();
        this.props.saveUser(values);
        const afterSubmitValues = {...formikValues};
        afterSubmitValues.password = '';
        resetForm(afterSubmitValues);
    }

    render() {
        return (
            <div className = 'SignInForm'>
                <h1>Rejestracja</h1>
                <Formik
                    onSubmit = {this.onSubmit}
                    initialValues = {{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: ''
                    }}
                    render = {
                        (formState) => (
                            <Form className = 'sign-in-form'>
                                <LogInInput name = 'firstName' label = 'Imię' type = 'text'/>
                                {
                                    console.log(formState.resetForm)
                                }
                                <LogInInput name = 'lastName' label = 'Nazwisko' type = 'text'/>
                                <LogInInput name = 'email' label = 'E-mail' type = 'email'/>
                                <LogInInput name = 'password' label = 'Hasło' type = 'password'/>
                                <button className = 'login-button' type="submit">Zarejestruj się!</button>
                            </Form>
                        )
                    }
                
                />
            </div>
        )
    }
}


export default connect(null, mapDispatchToProps)(SignInForm)