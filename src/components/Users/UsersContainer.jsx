import s from './Users.module.css'
import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch({type: 'FOLLOW', id: userId})
        },
        unfollow: (userId) => {
            dispatch({type: 'UNFOLLOW', id: userId})
        },
        setUsers: (users) => {
            dispatch({type: 'SET-USERS', users: users})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)