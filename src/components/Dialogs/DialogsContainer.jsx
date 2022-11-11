import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'



const DialogsContainer = () => {

    

    return ( 
    <StoreContext.Consumer> 
        { store => { 
            let state1 = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch({type: 'SEND-MESSAGE'})
            }
        
            let onNewMessageChange = (body) => {
                store.dispatch({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})
            }
    
            return (
        
        <Dialogs    updateNewMessageBody={onNewMessageChange} 
                    sendMessage={onSendMessageClick}
                    dialogsPage={state1}/> )}}
    </StoreContext.Consumer>
    
)
}

export default DialogsContainer;