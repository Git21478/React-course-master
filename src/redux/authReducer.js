let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true,
                login: '1234'
            }

        
        default:
            return state
    }
}

export default authReducer