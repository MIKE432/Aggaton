import React from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../redux/userActions';
import Styles from './UserPanel.module.scss';

const mapStateToProps = state => ({
    user: selectUser(state)
})

class UserPanel extends React.Component {
    render() {
        return (
            <>
                <div className={Styles.userPanel}>
                    <i className="fas fa-user"></i>
                    <i className="fas fa-coins"></i>
                    <i className="fas fa-info-circle"></i>
                    <i className="fas fa-wrench"></i>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps, null)(UserPanel)
