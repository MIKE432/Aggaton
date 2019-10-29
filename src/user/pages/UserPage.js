import React from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../redux/userActions';
import Styles from './UserPage.module.scss';
import UserPanel from './UserPanel';

const mapStateToProps = state => ({
    user: selectUser(state)
})

class UserPage extends React.Component {
    render() {
        return (
            <>
            <div className={Styles.photo}>
                <div className={Styles.userInformations}>
                    <span>{this.props.user.firstName} {this.props.user.lastName}</span>
                    {
                        this.props.user.isExpert ? <i className={Styles.expertSpan}>ekspert</i> : null
                    }
                </div>
            </div>
            <UserPanel />

            </>
        )
    }
}

export default connect(mapStateToProps, null)(UserPage)
