import React from 'react';
import { connect } from 'react-redux';
import Styles from './UserCoins.module.scss';
import Coin from '../../../coin/pages/Coin';
import { clearExpertCoins } from '../../redux/userActions'

const EmptyCoinList = () => (
    <div className={Styles.EmptyCoinList}>nie dodałeś jeszcze zadnych monet</div>
)

const mapStateToProps = state => ({
    clearExpertCoins: () => clearExpertCoins(state)
})

class UserCoins extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {
        this.props.clearExpertCoins()
    }

    render() {
        return (
            <div className={Styles.UserCoins}>
                {
                    this.props.coins && this.props.coins.length > 0 ? this.props.coins.map((value, index) => <Coin key={index} coin={value}/>) : <EmptyCoinList />
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(UserCoins)