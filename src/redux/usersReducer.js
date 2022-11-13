let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })}

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })}

        case 'SET-USERS':
            return { ...state, users: [...action.users]}

        case 'SET-CURRENT-PAGE': {
            return { ...state, currentPage: action.currentPage}
        }

        default:
            return state
    }
}

export default usersReducer