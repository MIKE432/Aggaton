import React from 'react';
import Styles from './Notifications.module.scss'
import Information from './Information';

class Notifications extends React.Component {
    render() {
        return(
            <>
                <div className={Styles.notificationsContainer}>
                    <h4>Informacje</h4>
                    <div>
                        <Information date='24-01-19' informationType='wazna' information='masdoajkaf afs'/>
                        <Information date='24-01-19' informationType='wazna' information='masdoajkaf afs'/>
                        <Information date='24-01-19' informationType='wazna' information='masdoajkaf afs'/>
                        <Information date='24-01-19' informationType='wazna' information='masdoajkaf afs'/>
                    </div>
                </div>
            </>
        )
    }
}

export default Notifications