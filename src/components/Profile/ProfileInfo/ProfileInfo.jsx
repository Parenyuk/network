import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/photo/user.png";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmitProfileData = (formData) => {
        debugger
      saveProfile(formData)
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.prof}>
                <img src={profile.photos.large || userPhoto} className={s.profileImg}/>
                {isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm profile={profile} onSubmit={onSubmitProfileData} />
                    : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={()=> {setEditMode(true)} }/>}
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return <ProfileDataForm />
}


const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}


export default ProfileInfo;
