import React from 'react'
import s from './Friends.module.css'
import Friend from "./Friend/Friend";


const Friends = (props) => {


    return <div className={s.friends}>
        <div>Friends</div>
        <div className={s.box}>
            <Friend/>
            <Friend/>
            <Friend/>
        </div>

    </div>
}

export default Friends;