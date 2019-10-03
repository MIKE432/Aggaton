import React from 'react';
import { connect } from 'react-redux';
import TopBarContent from './TopBarContent'
import Styles from './TopBar.module.scss'
import SearchComponent from '../../core/components/search/SearchComponent';
import { logOutUser, selectUser } from '../../user/redux/userActions';
import Notifications from './Notifications';

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
            showNotifications: false
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

    toggleNotifications = () => {
        this.setState({ showNotifications: !this.state.showNotifications})
    };

    closeNotifications = () => {
        if(this.state.showNotifications) {
            this.setState({ showNotifications: false })
        }
    }

    render() {
        return (
            <>
                <div className={Styles.TopBar} onClick={this.closeNotifications}>
                    <TopBarContent ref = {this.TopBarRef} hideTopBar = {this.onClick} />
                    <div className={Styles.Informations} ref = {this.BottomNavBar}>
                        <div className={Styles.icons}>
                            <i ref = {this.ArrowRef} className="fas fa-bars" onClick = {this.toggleShow} ></i>
                        </div>
                        <div className = 'search-box'>
                            <SearchComponent />
                        </div>
                        <div className={Styles.icons} onClick={this.toggleNotifications}>
                            <i className="fas fa-bell" ></i>
                        </div>
                        <div className={Styles.userName}>
                            <span>{this.props.user.firstName} {this.props.user.lastName}</span>
                        </div>
                        <div className={Styles.icons} onClick={this.props.logOutUser}>
                            <i className="fas fa-sign-out-alt" ></i>
                        </div>
                    </div>
                </div>
                {
                    console.log(this.state.showNotifications)
                }
                {
                    this.state.showNotifications ?  <Notifications hideNotifications={this.closeNotifications}/> : null
                }
        </> 
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);