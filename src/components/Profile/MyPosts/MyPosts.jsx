import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
 

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" 
                placeholder="Enter your message" validate={[required, maxLength10]}/>         
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
    

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm)

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        
            <div className={s.postsBlock}>
                <h3>My posts</h3>

                <AddNewPostFormRedux onSubmit={onAddPost}/>

                <div className={s.posts}>
                    {postElements}
                </div>

            </div>
       
    )
}


export default MyPosts;