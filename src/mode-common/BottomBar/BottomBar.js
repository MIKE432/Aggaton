import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BottomBar.module.scss';

const BottomBar = () =>
    (
        <div className={styles.bar}>
            <div className={styles.footer}>
                    <div>
                        <div className={styles.groupTitle}>Kontakt</div>
                    </div>
                    <div>
                        <div className={styles.groupTitle}>Sklepy</div>
                        <a target='blank' href='https://numimarket.pl/'>dom aukcyjny - numimarket.pl</a>
                    </div>
                    <div>
                        <div className={styles.groupTitle}>Organizacje</div>
                        <a target='blank' href='https://www.skarbnicanarodowa.pl/polska-numizmatyka'>Polska Numizmatyka</a><br />
                        <a target='blank' href='https://wcn.pl'>Warszawskie Centrum Numizmatyczne</a>

                    </div>
                <div className={styles.container}>
                </div>
            </div>
            <div className={styles.hr} />
            <div className={styles.summary}>
                <div className={styles.container}>
                    <div>Korzystanie z portalu oznacza akceptację postanowień jego <Link exact to='/terms'>Regulaminu</Link></div>
                    <div className={styles.sep} />
                    <div><Link to='/policy'>Polityka prywatności</Link></div>
                    <div className={styles.sep} />
                    <div><Link to='/playground'>Plac zabaw</Link></div>
                </div>
                <div>Written by <a>Apusart</a> 2019</div>
            </div>
        </div>
    )

export default BottomBar;
