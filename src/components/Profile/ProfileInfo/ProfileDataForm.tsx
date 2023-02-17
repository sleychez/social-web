import React from "react";
import ProfileStatusWithHooks from "./ProfileStatus";
import {createField, GetStringKeysType, Input, Textarea} from "../../common/FormsControl/FormsControl";

import style from "../../common/FormsControl/FormsControl.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../types/types";


type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

type ProfileKeysType = GetStringKeysType<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({profile, status, updateStatus, handleSubmit, error}) => {
    return  (
        <form onSubmit={handleSubmit}>
            <div className={style.saveButton}>
                <button style={{margin: '5px'}}>Save</button>
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
                }
                <div>
                {createField<ProfileKeysType>("Full name", "fullName", [], Input)}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div>
                <b>Looking for a job</b>:
                {createField<ProfileKeysType>("Looking for a job", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me</b>:
                {createField<ProfileKeysType>("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>My links</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={style.contact}>
                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                </div>
            })}
            </div>
        </form>
    )}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;