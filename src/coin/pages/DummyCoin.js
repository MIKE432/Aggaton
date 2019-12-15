import React from 'react'
import styles from './DummyCoin.module.scss'

const DummyCoin = (props) => {

    return (
        <div className={styles.DummyCoin}>
            <span className={styles.addPhotoSpan}>{props.title}</span>
            <div className={styles.AddPhoto} onClick={props.onclick}>
                <i className="fas fa-plus fa-2x"></i>
            </div> 
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
}

export default DummyCoin  