import React from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import Crypto from 'crypto-js';
import Text from '../../core/ctrls/Text';
import Button from '../../core/ctrls/Button';
import Check from '../../core/ctrls/Check';
import { saveUser } from '../redux/userActions'

const mapDispatchToProps = dispatch => ({
    saveUser: user => dispatch(saveUser(user))
})

class SignInForm extends React.Component {

    onSubmit = (formikValues, { resetForm }) => {
        const values = { ...formikValues }
        values.password = Crypto.SHA256(values.password).toString();
        this.props.saveUser(values);
        const afterSubmitValues = {...formikValues};
        afterSubmitValues.password = '';
        resetForm(afterSubmitValues);
    }

    render() {
        return (
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
                        <Form className='sign-in-form'>
                            <Text name='firstName' label='Imię' type='text' />
                            <Text name='lastName' label='Nazwisko' type='text'/>
                            <Text name='email' label='E-mail' type='email'/>
                            <Text name='password' label='Hasło' type='password'/>
                            <div style={{display:'flex', paddingTop:'15px', alignItems:'start'}}>
                                <Check>
                                    <span style={{fontSize:'100%'}}>
                                        Oświadczam, że wszystkie podane przeze mnie dane są zgodne ze stanem faktycznym oraz że są to moje dane 
                                        jako osoby fizycznej/dane prowadzonej przeze mnie działalności gospodarczej/rolniczej i że jestem w pełni 
                                        upoważniona/-y do ich podania.
                                    </span>
                                </Check>
                            </div>
                            <div style={{display:'flex', paddingTop:'15px', alignItems:'start'}}>
                                <Check>
                                    <span style={{fontSize:'100%'}}>
                                        Wyrażam zgodę na wykorzystanie przez InsERT S.A. końcowych urządzeń telekomunikacyjnych w celu przekazywania
                                        na podany przeze mnie adres e-mail informacji handlowych związanych z działalnością InsERT S.A., w tym 
                                        w szczególności ofert, cenników i innych informacji, służących promocji towarów i usług, w formie: e-mail. 
                                        W każdej chwili mogę wycofać wyrażoną zgodę.
                                    </span>
                                </Check>
                            </div>
                            <Button type="submit">Zarejestruj się!</Button>
                        </Form>
                    )
                }
            
            />
        )
    }
}


export default connect(null, mapDispatchToProps)(SignInForm)