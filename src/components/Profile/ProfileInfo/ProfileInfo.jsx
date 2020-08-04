import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/photo/user.png";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.prof}>
                <img src={profile.photos.large || userPhoto} className={s.profileImg}/>
                {isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm profile={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={()=> {setEditMode(true)} }/>}
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={activateEditMode}>edit</button></div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }

        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}


export default ProfileInfo;
