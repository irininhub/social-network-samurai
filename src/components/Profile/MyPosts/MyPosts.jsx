import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControl/FormsControl";


const MyPosts = React.memo((props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let AddPost = (values) => {
        props.addPost(values.newPostElement)
    };

    return (
        <div className={s.postsblock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={AddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength = maxLengthCreator(30)
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostElement"
                       component={Textarea}
                       validate = {[required, maxLength]}
                       placeholder = 'New post text'
                />

            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: 'newPost'})(AddPostForm)

export default MyPosts;