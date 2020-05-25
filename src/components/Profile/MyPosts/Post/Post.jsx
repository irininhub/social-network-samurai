import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

    return <div className={s.item}>
        <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FmOPt2sOxh1UoaxrNcWE6S29aHGGmqV50EGLiKzTaqpTCtLijg&s' />
        {props.message}
        <div>
            <span>Likes {props.likes}</span>
        </div>
   </div>


}


export default Post;