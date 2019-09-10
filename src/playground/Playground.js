import React from 'react';
import Text from '../core/ctrls/text/Text';
import ComboBox from '../core/ctrls/combobox/ComboBox';
import Combo from '../core/ctrls/combo/Combo';
import Button from '../core/ctrls/button/Button';
import ErrorBox from '../core/ctrls/errorbox/ErrorBox';

export const Playground = () => (
    <>
        <h1>CONTROLS / Edit</h1>
        <div style={{padding:'20px'}} >
            <ComboBox name='mark' label='Marka' style={{width:'100px'}}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </ComboBox>
            <Combo name='gender' label='płeć' style={{width:'200px'}} />
            <Text name='email' label='email' style={{width:'200px'}} />
            <Text name='email' label='email' style={{width:'200px'}} />
            <Text name='pass' label='hasło' type='password' style={{width:'200px'}}/>
            <div style={{display:'flex'}}>
                <Button mode='button' type='submit' style={{width:'100px'}}>Normal</Button>
                <Button mode='warning' type='submit' style={{width:'100px'}}>Warning</Button>
                <Button mode='form' type='submit' style={{width:'100px'}}>On form</Button>
                <Button mode='secondary' type='submit' style={{width:'100px'}}>Secondary</Button>
                <Button mode='primary' type='submit' style={{width:'100px'}}>Primary</Button>
            </div>
            <ErrorBox label='email' popup={false} visible={true}>Podaj prawidłowy email - <a href=''>chłopie</a> :) adsfasd fas<br /><b>Twój system</b></ErrorBox>
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