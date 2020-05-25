import React from 'react'
import s from "./Users.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User"


const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {


    return <div className={s.users}>
        <Paginator currentPage={currentPage}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={onPageChanged}/>
        <div>
            {props.users.map(u =>
                <User key={u.id}
                      user={u}
                      followingInProgress={props.followingInProgress}
                      unfollow={props.unfollow}
                      follow={props.follow}/>
            )}
        </div>
    </div>
}


export default Users;