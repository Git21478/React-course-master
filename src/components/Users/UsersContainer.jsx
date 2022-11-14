import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        
    })
    }

    render() {
        return <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users  totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow} />
                        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        toggleIsFetching: (isFetching) => {
            dispatch({ type: 'TOGGLE-IS-FETCHING', isFetching})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)