import {required} from "../../../utils/validators/validators";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsComtrol/FormsControl";
import React from "react";
import { NewMessageFormValuesType} from "../Dialogs";
import style from './AddMessageForm.module.css';
import { ReactComponent as Send } from "../../../assets/images/send.svg";


type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form className={style.container} onSubmit={props.handleSubmit}>
            <div className={style.messageInput}>
                {createField<NewMessageFormValuesKeysType>('Enter your message', 'newMessageBody', [required], Input, { className: style.messageInput })}
            </div>
            <button className={style.submitButton}>
                <Send  />
            </button>
        </form>
    )
}

export default reduxForm<NewMessageFormValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm)