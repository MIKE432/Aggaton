import React from 'react';
import { Formik, Form, Field } from 'formik';
import LogInInput from '../../../core/components/inputs/LogInInput'

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = 'SignInForm'>
                <h1>Sign In!</h1>
                <Formik 
                    initialValues = {{
                        username: '',
                        email: '',
                        password: ''
                    }}
                    render = {
                        (formstate) => (
                            <Form className = 'sigh-in-form'>
                                <LogInInput name = 'name' label = 'Imię' type = 'text'/>
                                <LogInInput name = 'lastName' label = 'Nazwisko' type = 'text'/>
                                <LogInInput name = 'email' label = 'E-mail' type = 'email'/>
                                <LogInInput name = 'password' label = 'Hasło' type = 'password'/>
                                <button className = 'login-button' type="submit">Submit</button>
                            </Form>
                        )
                    }
                
                />
            </div>
        )
    }
}


export default SignInForm