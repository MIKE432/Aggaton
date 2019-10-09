import React from 'react';
import Coin from './Coin'
import styles from './CoinList.module.scss';

const CoinList = (props) => {
    return (
        <div className={styles.coinList}>
            {
                props.coins && props.coins.map((value, index) => <Coin key={index} coin={value}/>)
            }
        </div>
    )
}

export default CoinList;