import React from 'react';
import styles from './coin.module.scss'

const Coin = (props) => (
    <div className={styles.coinContainer}>
        <div className={styles.photo} />
        <div className={styles.informations}>
            <div>
                <span>Rok wydania: </span>
                <i>{props.year}</i>
            </div>
            <div>
                <span>Aktualna cena: </span>
                <i>{props.price}</i>
            </div>
            <div>
                <span>Kraj: </span>
                <i>{props.country}</i>
            </div>
            <div>
                <span>Mennica: </span>
                <i>{props.mint}</i>
            </div>
        </div>
    </div>
)

export default Coin