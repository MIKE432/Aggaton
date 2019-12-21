import React from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import Crypto from 'crypto-js';
import Text from '../../core/ctrls/Text';
import Button from '../../core/ctrls/Button'
import { loginUser } from '../redux/userActions'
import * as yup from 'yup';
import ErrorBox from '../../core/ctrls/ErrorBox';
import Styles from './LogInForm.module.scss'

const emailError = { header: 'Podaj prawidłowy Email -', href: 'asd', hrefText:'chlopie', explaining: 'Potrzebujesz @' }
const passwordError = { header: 'Podaj swoje hasło -', href: 'asd', hrefText:'chlopie' }

const logInFormSchema = () => yup.object().shape({
    email: yup.string().email(emailError),
    password: yup.string().required(passwordError)
})

const mapStateToProps = state => ({
    loginFailed: state.user.loginFailed
})

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
        console.log(this.props.loginFailed)
        return (
            <div className = 'SignInForm'>
                <Formik
                    onSubmit = {this.onSubmit}
                    initialValues = {{
                        email: '',
                        password: ''
                    }}
                    validationSchema={logInFormSchema()}
                    render = {
                        (formState) => (
                            <div className="form-container">
                                <Form className = 'sign-in-form'>
                                    <Text label='Imię' name = 'email' label = 'E-mail' />
                                    <Text label='Imię' name = 'password' label = 'Hasło' type = 'password'/>
                                    {
                                        this.props.loginFailed && 
                                        <div className={Styles.errorContainer}>
                                            <ErrorBox style={Styles.error} visible={true} popup={false} label={emailError.header} explaining={emailError.explaining}>
                                                    {passwordError.header} <a href={passwordError.href}>{passwordError.hrefText}</a><br /><b>Numido</b>
                                            </ErrorBox>
                                        </div>
                                    }
                                    <Button type="submit">Zaloguj się!</Button>
                                </Form>
                            </div>
                        )
                    }
                />
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogInForm)