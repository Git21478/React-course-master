import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react'
import Dialogs from './Dialogs'



const DialogsContainer = (props) => {

    let state1 = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch({type: 'SEND-MESSAGE'})
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})
    }

    return (
        <Dialogs    updateNewMessageBody={onNewMessageChange} 
                    sendMessage={onSendMessageClick}
                    dialogsPage={state1}/>
    )
}

export default DialogsContainer;