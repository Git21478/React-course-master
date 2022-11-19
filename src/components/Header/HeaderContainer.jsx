import Header from './Header';
import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { getAuthUserData } from '../../redux/authReducer';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}



export default connect(mapStateToProps, {
    getAuthUserData
})(HeaderContainer);