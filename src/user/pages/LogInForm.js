import React from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import Crypto from 'crypto-js';
import Text from '../../core/ctrls/Text';
import Button from '../../core/ctrls/Button'
import { loginUser } from '../redux/userActions'

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
                                <Text name = 'email' label = 'E-mail' type = 'email' style={{width: '300px'}}/>
                                <Text name = 'password' label = 'Hasło' type = 'password' style={{width: '300px'}}/>
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