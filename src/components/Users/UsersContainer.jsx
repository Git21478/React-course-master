import s from './Users.module.css'
import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch({type: 'FOLLOW', userId})
        },
        unfollow: (userId) => {
            dispatch({type: 'UNFOLLOW', userId})
        },
        setUsers: (users) => {
            dispatch({type: 'SET-USERS', users})
        },
        setCurrentPage: (currentPage) => {
            dispatch({ type: 'SET-CURRENT-PAGE', currentPage})
        },
        setUsersTotalCount: (totalCount) => {
            dispatch({ type: 'SET-USERS-TOTAL-COUNT', totalCount})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)