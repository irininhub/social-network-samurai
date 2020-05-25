import React from 'react'
import s from "./User.module.css";
import photo from '../../assets/images/204-2040760_contact-starwars-user-default-yoda-comments-users-icon.png'
import {NavLink} from "react-router-dom";



const User = ({user, followingInProgress, unfollow, follow}) => {


    return <div className={s.user}>

        <div>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : photo} className={s.userPhoto}/>
            </NavLink>
            <div>{user.name}</div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>unfollow</button>

                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>follow</button>
                }
            </div>
        </div>
        <div>{user.status}</div>
        <div>
            <div>location.country</div>
            <div>location.city</div>
        </div>


    </div>
}


export default User;