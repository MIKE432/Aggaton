import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TopBarContent from './TopBarContent'
import Styles from './TopBar.module.scss'
import SearchComponent from '../../core/components/search/SearchComponent';
import { logOutUser, selectUser } from '../../user/redux/userActions';
import Notifications from './Notifications';
import PopupMenu from '../../core/ctrls/PopupMenu/PopupMenu';

const mapStateToProps = state => ({
    user: selectUser(state)
})

const mapDispatchToProps = dispatch => ({
    logOutUser: () => dispatch(logOutUser())
});

class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: true,
            isOpen: ''
        }


        this.TopBarRef = React.createRef();
        this.BottomNavBar = React.createRef();
        this.ArrowRef = React.createRef();

        this.toggleShow = () => {
            if(this.state.isShow) {
                this.TopBarRef.current.TopBarContentRef.current.classList.add(Styles.onHide);
                this.BottomNavBar.current.classList.add(Styles.InformationsOnHide);
                this.setState({isShow: false});
            }
            else {
                this.TopBarRef.current.TopBarContentRef.current.classList.remove(Styles.onHide);
                this.BottomNavBar.current.classList.remove(Styles.InformationsOnHide);
                this.setState({ isShow: true });
            }
        }
    }

    onClick = () => {
        this.setState({isShow: false});
        this.ArrowRef.current.classList.add(Styles.ArrowOnHide);
        this.TopBarRef.current.TopBarContentRef.current.classList.add(Styles.onHide);
        this.BottomNavBar.current.classList.add(Styles.InformationsOnHide);
    }

    toggleMenu = (menu) => {
        if(this.state.isOpen === menu) {
            this.setState({ isOpen: ''})
        } else {
            this.setState({ isOpen: menu})
    };
        }
        

    closeMenu = () => {
        if(this.state.isOpen !== '') {
            this.setState({ isOpen: '' })
        }
    }

    render() {
        return (
            <>
                <div className={Styles.TopBar}>
                    <TopBarContent ref = {this.TopBarRef} hideTopBar = {this.onClick} hideMenus={this.closeMenu}/>
                    <div className={Styles.Informations} ref = {this.BottomNavBar} >
                        <div className={Styles.icons} onClick={this.closeMenu}>
                            <i ref = {this.ArrowRef} className="fas fa-bars" onClick = {this.toggleShow} ></i>
                        </div>
                        <div className = 'search-box' onClick={this.closeMenu}>
                            <SearchComponent />
                        </div>
                        <PopupMenu
                            triggerComponent={(
                                <div className={Styles.icons} onClick={() => this.toggleMenu('notifications')}>
                                    <i className='fas fa-bell' ></i>
                            </div>)}
                            popupContent={(<div></div>)}
                            close={this.closeMenu}
                            openContent={this.state.isOpen === 'notifications'}
                        />
                        <PopupMenu 
                            triggerComponent={(
                                <div className={Styles.icons} onClick={() => this.toggleMenu('messages')}>
                                    <i className='fas fa-comment' ></i>
                            </div>)} 
                            popupContent={(<Notifications />)}
                            close={this.closeMenu}
                            openContent={this.state.isOpen === 'messages'}
                        />
                        <div className={Styles.userName} onClick={this.closeMenu}>
                            <Link to='/user' className='link'><span>{this.props.user.firstName} {this.props.user.lastName}</span></Link>
                        </div>
                        <div className={Styles.icons} onClick={this.props.logOutUser}>
                            <i className="fas fa-sign-out-alt" ></i>
                        </div>
                    </div>
                </div>
        </> 
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);