import React from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import Crypto from 'crypto-js';
import LogInInput from '../../../core/components/inputs/LogInInput'
import { loginUser } from '../../actions/actions'

const mapDispatchToProps = dispatch => ({
    loginUser: user => dispatch(loginUser(user))
})

class LogInForm extends React.Component {

    onSubmit = (formikValues, {resetForm}) => {
        const values = { ...formikValues }
        values.password = Crypto.SHA256(values.password).toString();
        this.props.loginUser(values);
        const afterSubmitValues = {...formikValues};
        afterSubmitValues.password = '';
        resetForm(afterSubmitValues);
    }

    render() {
        return (
            <div className = 'SignInForm'>
                <Formik
                    onSubmit = {this.onSubmit}
                    initialValues = {{
                        email: '',
                        password: ''
                    }}
                    render = {
                        (formState) => (
                            <Form className = 'sign-in-form'>
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


export default connect(null, mapDispatchToProps)(LogInForm)