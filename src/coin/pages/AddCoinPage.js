import React from 'react';
import { connect } from 'react-redux';
import AddCoinForm from './AddCoinForm';
import { getDataToForm, selectDataToForm } from '../redux/coinActions';

const mapStateToProps = state => ({
    dataToForm: selectDataToForm(state)
});

const mapDispatchToProps = dispatch => ({
    getDataToForm: () => dispatch(getDataToForm())
});

class AddCoinPage extends React.Component {

    componentDidMount() {
        this.props.getDataToForm()
    }

    render() {
        return (
            <>
                <h3>Dodaj nową monetę</h3>
                <AddCoinForm dataToForm={this.props.dataToForm}/>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCoinPage)