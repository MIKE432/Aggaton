import React from 'react';
import AddCoinForm from './AddCoinForm';

class AddCoinPage extends React.Component {
    render() {
        return (
            <>
                <h3>Dodaj nową monetę</h3>
                <AddCoinForm />
            </>
        )
    }
}

export default AddCoinPage