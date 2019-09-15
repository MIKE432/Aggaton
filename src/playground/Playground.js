import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../core/ctrls/Text';
import ComboBox from '../core/ctrls/ComboBox';
import Combo from '../core/ctrls/Combo';
import Button from '../core/ctrls/Button';
import ErrorBox from '../core/ctrls/ErrorBox';
import Check from '../core/ctrls/Check';
import Radio from '../core/ctrls/Radio';
import Toggle from '../core/ctrls/Toggle';

const formStyle = {maxWidth:'550px', padding:'20px'};
const buttonGroupStyle = {display:'flex', paddingTop:'15px', alignItems:'start'};
const listGroupStyle = {display:'flex', flexDirection: 'column', paddingTop:'15px', alignItems:'stretch'};
const checkSmallFontStyle = {fontSize:'100%'};

export const Playground = () => (
    <>
        <h1>CONTROLS / Edit</h1>
        <div style={{display:'flex'}}>
            <div style={formStyle} >
                <div style={buttonGroupStyle}>
                    <ComboBox name='mark' label='Marka' style={{width:'100px'}}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </ComboBox>
                    <Combo name='gender' label='płeć' style={{width:'200px'}}>
                        Female<br/>Male<br/>Custom
                    </Combo>
                    <Text name='firstname' label='imię' style={{width:'200px'}} />
                    <Text name='lastname' label='nazwisko' style={{width:'200px'}} />
                </div>
                <div style={buttonGroupStyle}>
                    <Text name='email' label='email' style={{width:'200px'}} />
                    <Text name='pass' label='hasło' type='password' style={{width:'200px'}}/>
                    <Button mode='form' type='submit' style={{width:'200px'}}>Button on form</Button>
                </div>
                <div style={buttonGroupStyle}>
                    <Check name='pass' label='hasło' type='password' style={{width:'200px'}}>
                        <span style={checkSmallFontStyle}>
                            Oświadczam, że zapoznałem/-am się z poniższymi informacjami 
                            oraz <Link exact to='/terms'>Regulaminem</Link> platformy Agralan, który akceptuję i wyrażam zgodę
                            na przetwarzanie moich danych osobowych podanych 
                            przeze mnie w formularzu rejestracyjnym wraz z załącznikami we wskazanych poniżej celach i zakresie.
                        </span>
                    </Check>
                </div>
                <div style={buttonGroupStyle}>
                    <Check>
                        <span style={checkSmallFontStyle}>
                            Oświadczam, że wszystkie podane przeze mnie dane są zgodne ze stanem faktycznym oraz że są to moje dane 
                            jako osoby fizycznej/dane prowadzonej przeze mnie działalności gospodarczej/rolniczej i że jestem w pełni 
                            upoważniona/-y do ich podania.
                        </span>
                    </Check>
                </div>
                <div style={buttonGroupStyle}>
                    <Check>
                        <span style={checkSmallFontStyle}>
                            Wyrażam zgodę na wykorzystanie przez InsERT S.A. końcowych urządzeń telekomunikacyjnych w celu przekazywania
                            na podany przeze mnie adres e-mail informacji handlowych związanych z działalnością InsERT S.A., w tym 
                            w szczególności ofert, cenników i innych informacji, służących promocji towarów i usług, w formie: e-mail. 
                            W każdej chwili mogę wycofać wyrażoną zgodę.
                        </span>
                    </Check>
                </div>
                <div style={listGroupStyle}>
                    <Toggle name='checkWords'>Sprawdzanie wyrazów</Toggle>
                    <Toggle name='checNames'>Duże litery</Toggle>
                    <Check name='checkWords'>Sprawdzanie wyrazów</Check>
                </div>
                <div style={buttonGroupStyle}>
                    <Check name='checNames'>Duże litery</Check>
                </div>
                <div style={buttonGroupStyle}>
                    <Radio name='pass'>Test</Radio>
                    <Radio name='pass'>Test</Radio>
                </div>
                <div style={buttonGroupStyle}>
                    <ErrorBox label='email' popup={false} visible={true}>Podaj prawidłowy email - <a href=''>chłopie</a> :) adsfasd fas<br /><b>Twój system</b></ErrorBox>
                </div>
                <div style={buttonGroupStyle}>
                    <Button mode='button' type='submit' style={{width:'100px'}}>Normal</Button>
                    <Button mode='warning' type='submit' style={{width:'100px'}}>Warning</Button>
                    <Button mode='secondary' type='submit' style={{width:'100px'}}>Secondary</Button>
                    <Button mode='primary' type='submit' style={{width:'100px'}}>Primary</Button>
                </div>
            </div>
        </div>
        <h2>This is h2</h2>
        <h3>This is h3</h3>
        <h4>This is h4</h4>
        <h5>This is h5</h5>
        <h6>This is h6</h6>
        <i>italic</i>
        <p>paragraph</p>
        <span>span</span>
    </>
)
export default Playground;