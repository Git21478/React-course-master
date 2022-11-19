import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer'
import { Navigate } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'





let mapStateToProps = (state) => {
    return ({
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
})
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageBody, sendMessage
})(AuthRedirectComponent)

export default DialogsContainer;