import React from 'react';
import { connect } from 'react-redux';
import BottomBar from './mode-common/BottomBar/BottomBar';
import './App.css';
import './core/consts/ScssToExport.scss';
import Routes from './core/components/Routes';
import { selectUserType } from './user/redux/userActions';
import { CookiesProvider } from 'react-cookie';
import TopBar from './mode-guest/Topbar/Topbar';

const mapStateToProps = state => ({
    userType: selectUserType(state)
})

class App extends React.Component {
    render(){ 
        return (
            <>
            <CookiesProvider >
                {
                    this.props.userType !== 'guest' ? <TopBar /> : null
                }
                <Routes userType={this.props.userType}/>
                <BottomBar />
            </CookiesProvider>
            </>
        );
    }
}

export default connect(mapStateToProps, null)(App);