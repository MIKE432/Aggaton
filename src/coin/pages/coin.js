import React from 'react';
import styles from './Coin.module.scss'

const Coin = (props) => (
    <div className={styles.coinContainer}>

        <div className={styles.photo} />
        <div className={styles.informations}>
            <div>
                <span>Rok wydania: </span>
                <i>{`${props.coin.year}`}</i>
            </div>
            <div>
                <span>Aktualna cena: </span>
                <i>{props.coin.coin_price.expert_price}</i>
            </div>
            <div>
                <span>Kraj: </span>
                <i>{props.coin.country}</i>
            </div>
            <div>
                <span>Mennica: </span>
                <i>{props.coin.mint}</i>
            </div>
        </div>
    </div>
)

export default Coin