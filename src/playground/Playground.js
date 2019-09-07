import React from 'react';
import Edit from '../core/ctrls/edit/Edit';
import ComboBox from '../core/ctrls/combobox/ComboBox';
import Button from '../core/ctrls/button/Button';
import ErrorBox from '../core/ctrls/errorbox/ErrorBox';

export const Playground = () => (
    <>
    <div>
        <h1>ctrls / Edit</h1>
        <div style={{padding:'20px'}} >
            <ComboBox name='mark' label='Marka' style={{width:'200px'}}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </ComboBox>
            <Edit name='email' label='email' style={{width:'200px'}} />
            <Edit name='email' label='email' style={{width:'200px'}} />
            <Edit name='pass' label='hasło' type='password' style={{width:'200px'}}/>
            <div style={{display:'flex'}}>
                <Button type='submit' style={{width:'100px'}}>Dalej</Button>
                <Button type='submit' style={{width:'100px'}}>Anuluj</Button>
            </div>
            <ErrorBox label='email' popup={false} visible={true}>Podaj prawidłowy email - <a href=''>chłopie</a> :) adsfasd fas<br /><b>Twój system</b></ErrorBox>
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