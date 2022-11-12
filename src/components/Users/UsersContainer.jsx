import s from './Users.module.css'
import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';

const UsersContainer = (props) => {
    return (
        <div className={s.users}>
            Users will be here
        </div>
    )
}

export default UsersContainer;