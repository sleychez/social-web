import { InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeysType,  Textarea} from "../../../common/FormsControl/FormsControl";
import React from "react";

type PropsType = {

}

export type AddPostFormValuesType = {
    newPostText: string
}

type AddPostFormValuesKeysType = GetStringKeysType<AddPostFormValuesType>

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostFormValuesKeysType>('Your post', 'newPostText', [],  Textarea)}
            </div>
            <div style={{marginTop: '5px'}}>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType,PropsType >({form: 'profileAddNewPostForm'})(AddNewPostForm)