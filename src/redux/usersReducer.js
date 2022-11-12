let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: false, fullName: 'Dmitry', status: 'I am a boss too', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 3, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
    ]
}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return (...u, followed: true)
                    }
                    return u
                })}
                
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return (...u, followed: false)
                    }
                    return u
                })}

        case 'SET-USERS':
            return { ...state, users: [...state.users, ...action.users]}

        default:
            return state
    }

    return state;
}

export default usersReducer