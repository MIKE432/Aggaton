import React from 'react';
import Styles from './UserCoins.module.scss';
import Coin from '../../../coin/pages/Coin';

const EmptyCoinList = () => (
    <div className={Styles.EmptyCoinList}>nie dodałeś jeszcze zadnych monet</div>
)

const UserCoins = (props) => {
    console.log(props.coins)
    return (
        <div className={Styles.UserCoins}>
            {
                props.coins && props.coins.length > 0 ? props.coins.map((value, index) => <Coin key={index} coin={value}/>) : <EmptyCoinList />
            }
        </div>
    )
}

export default UserCoins