import { required} from "../../../../utils/validators/validators";
import { InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeysType, Input} from "../../../common/FormsComtrol/FormsControl";
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
                {createField<AddPostFormValuesKeysType>('Your post', 'newPostText', [], Input)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType,PropsType >({form: 'profileAddNewPostForm'})(AddNewPostForm)