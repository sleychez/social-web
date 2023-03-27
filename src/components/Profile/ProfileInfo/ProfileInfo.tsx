import React, {ChangeEvent, useState} from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus";
import userPhoto from '../../../assets/images/icon-256x256.png';
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";



type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    savePhoto: (file: File) => void
    status: string
    updateStatus: (status: string) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}


const ProfileInfo:React.FC<PropsType> = ({profile, isOwner, savePhoto, status, updateStatus, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then (
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div >
    <div className={style.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={style.mainPhoto}/>
        {isOwner && <input className={style.inputPhoto} type={'file'} onChange={onMainPhotoSelected}/>}

        { editMode
            ? <ProfileDataForm  initialValues={profile} profile={profile} status={status}
                                      updateStatus={updateStatus} onSubmit={onSubmit}/>
            : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile}
                           status={status} updateStatus={updateStatus} isOwner={isOwner}/> }

        </div>
    </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
    goToEditMode: () => void
}

const ProfileData:React.FC<ProfileDataPropsType> = ({profile, status, updateStatus, isOwner, goToEditMode}) => {
    return  (
        <div>
            {isOwner && <div>
                <button className={style.editButton} onClick={goToEditMode}>Edit profile info</button> </div>}
        <div className={style.fullName}>
           {profile.fullName}
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div style={{marginTop: '5px'}}>
            <b>Looking for a job</b>: {profile.lookingForAJobDescription}
        </div>
            <div style={{marginTop: '5px'}}>
                <b >About me</b>: {profile.aboutMe}
            </div>
        <div style={{marginTop: '5px'}}>
            <b>My links</b>: {Object
            .keys(profile.contacts)
            .map(key => {
            return <Contact  key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>
    </div>
    )}


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div className={style.contact}><b>{contactTitle}</b>:{contactValue}</div>
}


export default ProfileInfo;