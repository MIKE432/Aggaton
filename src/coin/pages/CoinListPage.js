import React from 'react';
import { connect } from 'react-redux';
import CoinList from './CoinList';
import { getCoins, selectCoins, clearCoins } from '../redux/coinActions';


const mapStateToProps = state => ({
    coins: selectCoins(state),
    clearCoins: () => clearCoins(state)
});

const mapDispatchToProps = dispatch => ({
    getCoins: () => dispatch(getCoins())
});

class CoinListPage extends React.Component {

    componentDidMount() {
        this.props.getCoins();
    }

    componentWillUnmount() {
        this.props.clearCoins()
    }

    render() {
        return (
            <>
                <h3>Monety</h3>
                <CoinList coins={this.props.coins}/>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinListPage)