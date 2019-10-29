import React from 'react';
import Coin from './Coin'
import Styles from './CoinList.module.scss';

const CoinList = (props) => {
    return (
        <div className={Styles.coinsContainer}>
            <div className={Styles.coinList}>
                {
                    props.coins && props.coins.map((value, index) => <Coin key={index} coin={value}/>)
                }
            </div>
        </div>
    )
}

export default CoinList;