import React from 'react';
import Styles from './Notifications.module.scss'
import Information from './Information';

class Notifications extends React.Component {
    render() {
        return(
            <>
                <div className={Styles.notificationsContainer}>
                    <h4 className={Styles.header}>Informacje</h4>
                    <div>
                        <Information date='24-01-19' informationType='wazna' information='Informacja o raku' details='rak to istota...'/>
                        <Information date='24-01-19' informationType='wazna' information='Informacja o smoku' details='smok to istota...'/>
                        <Information date='24-01-19' informationType='wazna' information='Informacja o rybie' details='ryba to istota...'/>
                        <Information date='24-01-19' informationType='wazna' information='Informacja o człowieku' details='człowiek to istota...'/>
                        <Information date='24-01-19' informationType='wazna' information='Informacja o człowieku' details='człowiek to istota...'/>
                        <Information date='24-01-19' informationType='wazna' information='Informacja o człowieku' details='człowiek to istota...'/>
                        <Information date='24-01-19' informationType='wazna' information='Informacja o człowieku' details='człowiek to istota...'/>
                        <Information date='24-01-19' informationType='wazna' information='Informacja o człowieku' details='człowiek to istota...'/>
                        <Information date='24-01-19' informationType='wazna' information='Informacja o człowieku' details='człowiek to istota...'/>
                        <Information date='24-01-19' informationType='wazna' information='Informacja o człowieku' details='człowiek to istota...'/>
                    </div>
                </div>
            </>
        )
    }
}

export default Notifications