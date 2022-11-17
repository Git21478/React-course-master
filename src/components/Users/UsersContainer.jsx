import React from 'react'
import { connect } from 'react-redux';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api'
import { followSuccess, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingProgress, toggleIsFetching, unfollowSuccess } from '../../redux/usersReducer';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
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
                        unfollow={this.props.unfollow}
                        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                        followingInProgress={this.props.followingInProgress} />
                        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followSuccess(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowSuccess(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setTotalUsersCount(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        },
        toggleIsFollowingProgress: (isFetching, userId) => {
            dispatch(toggleFollowingProgress(isFetching, userId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)