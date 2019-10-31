import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import Text from '../../core/ctrls/Text';
import styles from './AddCoinForm.module.scss'
import Button from '../../core/ctrls/Button';
import ComboBox from '../../core/ctrls/ComboBox';
import { saveCoin } from '../redux/coinActions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    saveCoin: coin => dispatch(saveCoin(coin)),
});

class AddCoinForm extends React.Component {

    onSubmit = (values) => {
        this.props.saveCoin(values)
    }

    render() {
        return (
            <Formik
                onSubmit={this.onSubmit}
                initialValues={{
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
                        <div>
                            <Text name='year' label='Rok wydania' style={{width:'150px'}} />
                            <Text name='price' label='Aktualna cena' style={{width:'150px'}} />
                            <Text name='estimatedAmount' label='Nakład' style={{width:'150px'}} />
                            <Text name='weight' label='Waga' style={{width:'150px'}} />
                            <Text name='diameter' label='Średnica' style={{width:'150px'}} />
                        </div>
                        <div>
                            <ComboBox name='rim' label='Krawędź' style={{width:'400px'}}>
                                <option value=""></option>
                                {
                                    this.props.dataToForm && this.props.dataToForm.rims && this.props.dataToForm.rims.map(rim => (
                                        <option key={rim.id} value={rim.id}>{rim.name}</option>
                                    ))
                                }
                            </ComboBox>
                            <ComboBox name='alloy' label='Stop' style={{width:'400px'}}>
                                <option value=""></option>
                                {
                                    this.props.dataToForm && this.props.dataToForm.alloys && this.props.dataToForm.alloys.map(alloy => (
                                        <option key={alloy.id} value={alloy.id}>{alloy.short_name} - {alloy.full_name}</option>
                                    ))
                                }
                            </ComboBox>
                            <ComboBox name='shape' label='Kształt' style={{width:'400px'}}>
                            <option value=""></option>
                            {
                                this.props.dataToForm && this.props.dataToForm.shapes && this.props.dataToForm.shapes.map(shape => (
                                    <option key={shape.id} value={shape.id}>{shape.name}</option>
                                ))
                            }
                            </ComboBox>
                        </div>

                        <Text name='stamp' label='Stempel' style={{width:'400px'}} />
                        <Text name='name' label='Nazwa' style={{width:'400px'}} />
                        <Text name='symbol' label='Symbol' style={{width:'400px'}} />
                        <Text name='nominal' label='Nominał' style={{width:'400px'}} />
                        <Text name='currency' label='Waluta' style={{width:'400px'}} />
                        <Text name='country' label='Kraj' style={{width:'400px'}} />
                        <Text name='mint' label='Mennica' style={{width:'400px'}} />
                        <Text name='grading' label='Ocena' style={{width:'400px'}} />
                        <Button mode='primary' type='submit' style={{width:'200px'}}>Dodaj monetę</Button>
                    </Form>
                )}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCoinForm)