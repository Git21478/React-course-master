import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer'





let mapStateToProps = (state) => {
    return ({
        dialogsPage: state.dialogsPage
})
}

let mapDispatchToProps = (dispatch) => {
     return ({
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBody(body))
        },
        sendMessage: () => {
            dispatch(sendMessage())
        }
})
}

const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageBody, sendMessage
})(Dialogs)

export default DialogsContainer;