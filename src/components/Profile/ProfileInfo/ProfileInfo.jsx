import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={s.content}>
        {/*<div>*/}
        {/*    <img src="http://www.ejin.ru/wp-content/uploads/2017/09/10-611.jpg"/>*/}
        {/*</div>*/}

        <div className={s.block}>
            <div className={s.avatar}>
                <img src={props.profile.photos.large}/></div>
            <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>

        </div>
    </div>


};


export default ProfileInfo;


