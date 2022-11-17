import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer'





let mapStateToProps = (state) => {
    return ({
        dialogsPage: state.dialogsPage
})
}

const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageBody, sendMessage
})(Dialogs)

export default DialogsContainer;