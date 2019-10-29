import React from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import Crypto from 'crypto-js';
import Text from '../../core/ctrls/Text';
import Button from '../../core/ctrls/Button'
import { loginUser } from '../redux/userActions'
import * as yup from 'yup';


const logInFormSchema = () => yup.object().shape({
    email: yup.string().email().required('dsadsadsadsa'),
    password: yup.string().min(5)
})

const mapDispatchToProps = dispatch => ({
    loginUser: user => dispatch(loginUser(user))
})

class LogInForm extends React.Component {

    onSubmit = (formikValues, {resetForm}) => {
        console.log('xd');
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
                    validationSchema={logInFormSchema()}
                    render = {
                        (formState) => (
                            <Form className = 'sign-in-form'>
                                <Text name = 'email' label = 'E-mail' />
                                <Text name = 'password' label = 'Hasło' type = 'password'/>
                                <Button type="submit">Zaloguj się!</Button>
                            </Form>
                        )
                    }
                
                />
            </div>
        )
    }
}


export default connect(null, mapDispatchToProps)(LogInForm)