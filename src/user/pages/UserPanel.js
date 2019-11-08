import React from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../redux/userActions';
import Styles from './UserPanel.module.scss';
import UserInformations from './sections/UserInformations'
import { selectExpertCoins, getExpertCoins } from '../../coin/redux/coinActions';
import UserCoins from './sections/UserCoins';

const mapStateToProps = state => ({
    user: selectUser(state),
    coins: selectExpertCoins(state)
})

const mapDispatchToProps = dispatch => ({
    getExpertCoins: () => dispatch(getExpertCoins())
})

class UserPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            section: 'addedCoins'
        }
    }

    componentDidMount() {
        this.props.getExpertCoins();
    }

    generateSection = () => {
        switch(this.state.section) {
            case 'userInformations': {
                return (
                    <UserInformations  userInfo={this.props.user}/>
                )
            }
            case 'addedCoins': {
                return (
                    <div>
                        {
                            <UserCoins coins={this.props.coins} />
                        } 
                    </div>
                )
            }
            case 'informations': {
                return (
                    <div>
                        informations
                    </div>
                )
            }
            case 'settings': {
                return (
                    <div>
                        settings
                    </div>
                )
            }
            default: {
                return (
                    <div>
                        default
                    </div>
                )
            }  
        }
    }

    toggleSection = (section) => {
        if(this.state.section !== section) {
            this.setState({section: section})
        }
    }

    render() {
        return (
            <div className={Styles.userPanel}>
                <div className={Styles.userBar}>
                    <div className='icons' onClick={() => this.toggleSection('userInformations')}>
                        <i className="fas fa-user"></i>
                    </div>
                    {
                        this.props.user.isExpert ?                     
                            <div className='icons' onClick={() => this.toggleSection('addedCoins')}>
                                <i className="fas fa-coins"></i>
                            </div> : null
                    }
                    <div className='icons' onClick={() => this.toggleSection('informations')}>
                        <i className="fas fa-info-circle"></i>
                    </div>
                    <div className='icons' onClick={() => this.toggleSection('settings')}>
                        <i className="fas fa-wrench"></i>
                    </div>
                </div>
                {
                    this.generateSection()
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel)
