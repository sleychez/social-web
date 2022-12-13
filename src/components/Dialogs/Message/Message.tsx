import React from "react";
import style from './../Dialogs.module.css';


type PropsType = {
    message: string
    id: number
}

const Message: React.FC<PropsType> = (props) => {
    return (
    <div className={style.dialog}>{props.message}</div>
    )
}



export default Message;