import React from 'react';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    
    let state = props.store.getState()


    let addPost = () => {
        props.store.dispatch({type: 'ADD-POST'})
    }

    let onPostChange = (text) => {
        props.store.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }

    return (
        <MyPosts    updateNewPostText={onPostChange} 
                    addPost={addPost} 
                    posts={state.profilePage.posts} 
                    newPostText={state.profilePage.newPostText}/> 
    )
}

export default MyPostsContainer;