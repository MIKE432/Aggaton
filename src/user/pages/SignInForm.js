import React from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import Crypto from 'crypto-js';
import Text from '../../core/ctrls/Text';
import Button from '../../core/ctrls/Button';
import Check from '../../core/ctrls/Check';
import { saveUser } from '../redux/userActions'
import Styles from './SignInForm.module.scss'
import * as yup from 'yup'

const emailError = { header: 'Podaj prawidłowy Email -', href: 'asd', hrefText:'chlopie', explaining: 'Potrzebujesz @' }
const passwordError = { header: 'Podaj mocne hasło -', href: 'asd', hrefText:'chlopie', explaining: 'Przynajmniej 5 znaków' }
const firstNameError = { header: 'Podaj prawidłowe imię', href: 'asd', hrefText:'chlopie', explaining: '' }
const lastNameError = { header: 'Podaj prawidłowe nazwisko', href: 'asd', hrefText:'chlopie', explaining: '' }


const signInFormSchema = () => yup.object().shape({
    email: yup.string().email(emailError).required(emailError),
    password: yup.string().min(5, passwordError).required(passwordError),
    firstName: yup.string().min(2, firstNameError).required(firstNameError),
    lastName: yup.string(lastNameError).required(lastNameError),
})

const mapDispatchToProps = dispatch => ({
    saveUser: user => dispatch(saveUser(user))
})

class SignInForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isAfterSubmit: false
        }
    }

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
                validationSchema={signInFormSchema()}
                render = {
                    (formState) => (
                        <div className="form-container">
                            <Form className='sign-in-form'>
                                <Text 
                                    handleTouch={() => formState.setTouched({ ...formState.touched, firstName: true })} 
                                    name='firstName' 
                                    error={formState.touched.firstName && formState.errors.firstName} 
                                    label='Imię' 
                                    type='text' 
                                    style={Styles.text}
                                />
                                <Text 
                                    handleTouch={() => formState.setTouched({ ...formState.touched, lastName: true })} 
                                    name='lastName' 
                                    error={formState.touched.lastName && formState.errors.lastName} 
                                    label='Nazwisko' 
                                    type='text' 
                                    style={Styles.text}
                                />
                                <Text 
                                    handleTouch={() => formState.setTouched({ ...formState.touched, email: true })} 
                                    name='email' 
                                    error={formState.touched.email && formState.errors.email} 
                                    label='E-mail' 
                                    type='email' 
                                    style={Styles.text}
                                />
                                <Text 
                                    handleTouch={() => formState.setTouched({ ...formState.touched, password: true })} 
                                    name='password' 
                                    error={formState.touched.password && formState.errors.password} 
                                    label='Hasło' 
                                    type='password' 
                                    style={Styles.text}
                                />
                                <div className={Styles.termsContainer}>
                                    <div className={Styles.terms}>
                                        <Check>
                                            <span style={{fontSize:'100%'}}>
                                                Oświadczam, że wszystkie podane przeze mnie dane są zgodne ze stanem faktycznym oraz że są to moje dane 
                                                jako osoby fizycznej/dane prowadzonej przeze mnie działalności gospodarczej/rolniczej i że jestem w pełni 
                                                upoważniona/-y do ich podania.
                                            </span>
                                        </Check>
                                    </div>
                                    <div className={Styles.terms}>
                                        <Check>
                                            <span style={{fontSize:'100%'}}>
                                                Wyrażam zgodę na wykorzystanie przez InsERT S.A. końcowych urządzeń telekomunikacyjnych w celu przekazywania
                                                na podany przeze mnie adres e-mail informacji handlowych związanych z działalnością InsERT S.A., w tym 
                                                w szczególności ofert, cenników i innych informacji, służących promocji towarów i usług, w formie: e-mail. 
                                                W każdej chwili mogę wycofać wyrażoną zgodę.
                                            </span>
                                        </Check>
                                    </div>
                                </div>
                                {
                                    console.log(formState)
                                }
                                <Button type="submit">Zarejestruj się!</Button>
                            </Form>
                        </div>
                    )
                }
            
            />
        )
    }
}


export default connect(null, mapDispatchToProps)(SignInForm)