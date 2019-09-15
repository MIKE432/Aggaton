import React from 'react';
import { Formik, Form } from 'formik';
import Text from '../../core/ctrls/Text';
import styles from './AddCoinForm.module.scss'
import Button from '../../core/ctrls/Button';

class AddCoinForm extends React.Component {

    onSubmit() {

    }

    render() {
        return (
            <Formik
                onSubmit={this.onSubmit}
                initalState={{
                    year: '',
                    price: '',
                    estimatedAmount: '',
                    weight: '',
                    diameter: '',
                    rim: '',
                    alloy: '',
                    shape: '',
                    stamp: '',
                    nominal: '',
                    currency: '',
                    mint: '',
                    country: '',
                    grading: ''
                }}
                render={(formState) => (
                    <Form className={styles.form}>
                        <Text name='year' label='Rok wydania' style={{width:'400px'}} />
                        <Text name='price' label='Aktualna cena' style={{width:'400px'}} />
                        <Text name='estimatedAmount' label='Nakład' style={{width:'400px'}} />
                        <Text name='weight' label='Waga' style={{width:'400px'}} />
                        <Text name='diameter' label='Średnica' style={{width:'400px'}} />
                        <Text name='rim' label='Typ brzegu' style={{width:'400px'}} />
                        <Text name='alloy' label='Stop' style={{width:'400px'}} />
                        <Text name='shape' label='Kształt' style={{width:'400px'}} />
                        <Text name='stamp' label='Stempel' style={{width:'400px'}} />
                        <Text name='nominal' label='Nominał' style={{width:'400px'}} />
                        <Text name='currency' label='Waluta' style={{width:'400px'}} />
                        <Text name='country' label='Kraj' style={{width:'400px'}} />
                        <Text name='mint' label='Mennica' style={{width:'400px'}} />
                        <Text name='grading' label='Ocena' style={{width:'400px'}} />
                        <Button mode='primary' type='submit' style={{width:'200px'}}>Dodaj monetę</Button>
                        {
                            console.log(formState.values)
                        }
                    </Form>
                )}
            />
        )
    }
}

export default AddCoinForm