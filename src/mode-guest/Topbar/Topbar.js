import React from 'react';
import TopBarContent from './TopBarContent'
import Styles from './TopBar.module.scss'
import SearchComponent from '../search/SearchComponent'
class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: true
        }

        this.TopBarRef = React.createRef();
        this.BottomNavBar = React.createRef();
        this.ArrowRef = React.createRef();

        this.toggleShow = () => {
            if(this.state.isShow) {

                this.ArrowRef.current.classList.add(Styles.ArrowOnHide)
                this.TopBarRef.current.TopBarContentRef.current.classList.add(Styles.onHide);
                this.BottomNavBar.current.classList.add(Styles.InformationsOnHide);
                this.setState({isShow: false});
            }
            else {
                this.TopBarRef.current.TopBarContentRef.current.classList.remove(Styles.onHide);
                this.BottomNavBar.current.classList.remove(Styles.InformationsOnHide);
                this.ArrowRef.current.classList.remove(Styles.ArrowOnHide);
                this.setState({isShow: true});
            }
        }
    }

    onClick = () => {
        this.setState({isShow: false});
        this.ArrowRef.current.classList.add(Styles.ArrowOnHide);
        this.TopBarRef.current.TopBarContentRef.current.classList.add(Styles.onHide);
        this.BottomNavBar.current.classList.add(Styles.InformationsOnHide);
    }

    render() {
        return (
            <>
                <div className={Styles.TopBar}>
                    <TopBarContent ref = {this.TopBarRef} hideTopBar = {this.onClick} />
                    <div className={Styles.Informations} ref = {this.BottomNavBar}>
                        <i ref = {this.ArrowRef} className="fas fa-arrow-up fa-2x" onClick = {this.toggleShow} ></i>
                        <div className = 'search-box'>
                            
                            <SearchComponent />
                        </div>
                    </div>

                </div>
        </> 
        )
    }
}

export default TopBar;