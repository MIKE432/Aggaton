import React from 'react';
import { connect } from 'react-redux';
import BottomBar from './mode-common/BottomBar/BottomBar';
import './App.css';
import './core/consts/ScssToExport.scss';
import Routes from './core/components/Routes';
import { selectUserType } from './user/redux/userActions';
import { CookiesProvider } from 'react-cookie';

const mapStateToProps = state => ({
    userType: selectUserType(state)
})

class App extends React.Component {
    render(){ 
        return (
            <>
            <CookiesProvider >
                <Routes userType={this.props.userType}/>
                <BottomBar />
            </CookiesProvider>
            </>
        );
    }
}

export default connect(mapStateToProps, null)(App);