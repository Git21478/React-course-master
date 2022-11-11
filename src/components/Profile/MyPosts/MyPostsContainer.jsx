import React from 'react';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {
    
    return (
        <StoreContext.Consumer> 
            { store => {
            let state = store.getState();

            let addPost = () => {
                store.dispatch({type: 'ADD-POST'})
            }
        
            let onPostChange = (text) => {
                store.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
            }

            return ( <MyPosts    updateNewPostText={onPostChange} 
                    addPost={addPost} 
                    posts={store.getState().profilePage.posts} 
                    newPostText={store.getState().profilePage.newPostText}/> 
                    )}}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;