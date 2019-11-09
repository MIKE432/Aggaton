import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import Text from '../../core/ctrls/Text';
import styles from './AddCoinForm.module.scss'
import Button from '../../core/ctrls/Button';
import ComboBox from '../../core/ctrls/ComboBox';
import { saveCoin } from '../redux/coinActions';

class CoinPhotoFilePicker extends React.Component {
    constructor(props) {
        super(props) 
        this.fileInputRef = React.createRef();
        this.state = {
            loadedPhoto: null
        }
    }

    readURL = () => {
        const files = this.fileInputRef.current.files;
        if (files && files[0]) {
            const reader = new FileReader();
            const data = new FormData();
            data.append('file', this.fileInputRef.current.files[0] )

            reader.onload = (e) => {
                e.preventDefault();
                this.setState({ loadedPhoto: e.target.result })
                this.props.registerPhoto(data);
            };

            reader.readAsDataURL(this.fileInputRef.current.files[0]);
        }
    }

    onClick = () => {
        this.fileInputRef.current.click()
    }

    render() {
        return (
            <>
            {
                this.state.loadedPhoto ? <img src={this.state.loadedPhoto} /> : 

                <div className={styles.AddCoinPhoto} onClick={this.onClick}>
                    <i className="fas fa-plus fa-2x"></i>
                <input ref={this.fileInputRef} type="file" onChange={this.readURL}/>
            </div>
            }
            </>
        )
    }
}



const DummyCoin = (props) => {


    return (
        <div className={styles.DummyCoin}>
            <div className={styles.AddPhoto} onClick={props.onclick}>
                <i className="fas fa-plus fa-2x"></i>
            </div> 
            <div className={styles.informations}>
                <div>
                    <span>Rok wydania: </span>
                    <i>{`${props.coin.year}`}</i>
                </div>
                <div>
                    <span>Aktualna cena: </span>
                    <i>{props.coin.coin_price.expert_price}</i>
                </div>
                <div>
                    <span>Kraj: </span>
                    <i>{props.coin.country}</i>
                </div>
                <div>
                    <span>Mennica: </span>
                    <i>{props.coin.mint}</i>
                </div>
            </div>
        </div>
    )
}

const CoinAddPhotoForm = (props) => (
    <div className={styles.AddCoinPhotoForm}>
            <div className={styles.AddPhotosSection}>
                <div >
                    <h3>Averse</h3>
                    <CoinPhotoFilePicker registerPhoto={props.registerAverse}/>
                </div>
                <div>
                    <h3>Reverse</h3>
                    <CoinPhotoFilePicker registerPhoto={props.registerReverse}/>
                </div>
            </div>    
            <div className={styles.buttons}>
                <Button mode='primary' type='submit' onClick={props.accept} style={{width:'200px'}}>Dodaj Awers i Rewers</Button>
                <Button mode='warning' type='submit' onClick={props.abort} style={{width:'200px'}}>Anuluj</Button>
            </div>
    </div>
)

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    saveCoin: coin => dispatch(saveCoin(coin)),
});

class AddCoinForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isCoinAddFormOpen: false,
            averse: null,
            reverse: null
        }
    }

    registerAverse = (averse) => {
        this.setState({ averse })
    }

    registerReverse = (reverse) => {
        this.setState({ reverse })
    }

    onSubmit = (values) => {
        this.props.saveCoin({ values, averse: this.state.averse, reverse: this.state.reverse })
    }

    openAddPhotoForm = () => {
        this.setState({ isCoinAddFormOpen: true })
    }

    closeAddPhotoForm = () => {
        this.setState({ isCoinAddFormOpen: false })
    }

    render() {
        return (
            <Formik
                onSubmit={this.onSubmit}
                initialValues={{
                    name: '',
                    year: '',
                    price: '',
                    name: '',
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
                    grading: '',
                    coinDepth: '',
                    symbol: '',
                    about: ''
                }}
                render={(formState) => (
                    <>
                        {
                            this.state.isCoinAddFormOpen ? <CoinAddPhotoForm 
                                closeAddPhotoForm={this.closeAddPhotoForm}
                                registerAverse={this.registerAverse}
                                registerReverse={this.registerReverse}
                                accept={this.closeAddPhotoForm}
                                abort={() => {
                                    this.closeAddPhotoForm()
                                    this.setState({averse: null, reverse: null})
                                }} /> : null
                        }
                        <div className={styles.AddCoinFormContainer}>
                            <Form className={styles.form}>
                                <div className={styles.CoinContainer}>
                                    <DummyCoin coin={{
                                        coin_price: {expert_price: formState.values.price}, 
                                        year: formState.values.year,
                                        country: formState.values.country,
                                        mint: formState.values.mint
                                        
                                        }} onclick={this.openAddPhotoForm}
                                        averse={this.state.averse}
                                    />

                                    <Button mode='primary' type='submit' style={{width:'200px'}}>Dodaj monetę</Button>
                                </div>
                                <div className={styles.formContainer}>
                                    <div className={styles.section}>
                                        <Text name='name' label='Nazwa' style={{width:'200px'}} />
                                        <Text name='nominal' label='Nominał' style={{width:'200px'}} />
                                        <Text name='currency' label='Waluta' style={{width:'150px'}} />
                                        <Text name='symbol' label='Symbol' style={{width:'75px'}} />
                                        <Text name='country' label='Kraj' style={{width:'200px'}} />
                                    </div>
                                    <div className={styles.section}>
                                        <Text name='year' label='Rok wydania' style={{width:'150px'}} />
                                        <Text name='price' label='Aktualna cena' style={{width:'200px'}} />
                                        <Text name='estimatedAmount' label='Nakład' style={{width:'200px'}} />
                                        <Text name='weight' label='Waga' style={{width:'75px'}} />
                                        <Text name='diameter' label='Średnica' style={{width:'200px'}} />
                                    </div>
                                    <div className={styles.section}>
                                        <ComboBox name='rim' label='Krawędź' style={{width:'200px'}}>
                                            <option value=""></option>
                                            {
                                                this.props.dataToForm && this.props.dataToForm.rims && this.props.dataToForm.rims.map(rim => (
                                                    <option key={rim.id} value={rim.id}>{rim.name}</option>
                                                ))
                                            }
                                        </ComboBox>
                                        <ComboBox name='shape' label='Kształt' style={{width:'75px'}}>
                                        <option value=""></option>
                                        {
                                            this.props.dataToForm && this.props.dataToForm.shapes && this.props.dataToForm.shapes.map(shape => (
                                                <option key={shape.id} value={shape.id}>{shape.name}</option>
                                            ))
                                        }
                                        </ComboBox>
                                        <ComboBox name='coinDepth' label='Bicie' style={{width:'150px'}}>
                                        <option value=""></option>
                                        {
                                            this.props.dataToForm && this.props.dataToForm.coinDepths && this.props.dataToForm.coinDepths.map(coinDepth => (
                                                <option key={coinDepth.id} value={coinDepth.id}>{coinDepth.name}</option>
                                            ))
                                        }
                                        </ComboBox>
                                        <ComboBox name='alloy' label='Stop' style={{width:'200px'}}>
                                            <option value=""></option>
                                            {
                                                this.props.dataToForm && this.props.dataToForm.alloys && this.props.dataToForm.alloys.map(alloy => (
                                                    <option key={alloy.id} value={alloy.id}>{alloy.short_name} - {alloy.full_name}</option>
                                                ))
                                            }
                                        </ComboBox>
                                        <Text name='stamp' label='Stempel' style={{width:'200px'}} />
                                    </div>
                                    <div className={styles.section}>
                                        <Text name='mint' label='Mennica' style={{width:'400px'}} />
                                        <Text name='grading' label='Ocena' style={{width:'400px'}} />
                                    </div>
                                    <Text name='about' label='Opis' style={{width:'100%', height: '100%'}} />
                                </div>
                            </Form>
                        </div>
                    </>
                )}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCoinForm)