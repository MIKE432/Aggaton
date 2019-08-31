import React from 'react';
import styles from './BottomBar.module.scss';

const BottomBar = () =>
    (
        <div className={styles.bar}>
            <div className={styles.footer}>
                <div class={styles.container}>
                    <div>
                        Kontakt
                    </div>
                    <div className={styles.sep} />
                    <div>
                        Fajne linki
                    </div>
                    <div className={styles.sep} />
                    <div>
                        Inne fajne linki
                    </div>
                </div>
            </div>
            <div className={styles.hr} />
            <div className={styles.summary}>
                <div class={styles.container}>
                    <div>Korzystanie z portalu oznacza akceptację postanowień jego <a>Regulaminu</a></div>
                    <div className={styles.sep} />
                    <div>Polityka prywatności</div>
                </div>
                <div>Written by <a>Apusart</a> 2019</div>
            </div>
        </div>
    )

export default BottomBar;
