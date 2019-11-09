import React from 'react';
import styles from './Coin.module.scss';

const Photo = ({averse}) => {

    const byteArray = new Uint8Array(averse.data);
    const blob = new Blob([byteArray], { type: "image/png"});
    const urlCreator = window.URL || window.webkitURL;
    const imageUrl = urlCreator.createObjectURL( blob );

    return (
        <img className={styles.photo} src={imageUrl} />
    )
}

const Coin = (props) => {


    return (
        <div className={styles.coinContainer}>
            {
                props.coin.averse ? <Photo averse={props.coin.averse}/> : <div className={styles.photo}></div>
            }
            <div className={styles.informations}>
                <div>
                    <span>Rok wydania: </span>
                    <i>{`${props.coin.year}`}</i>
                </div>
                <div>
                    <span>Aktualna cena: </span>
                    <i>{props.coin.price.expertPrice}</i>
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
}

export default Coin