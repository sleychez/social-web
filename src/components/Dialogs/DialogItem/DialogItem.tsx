import React from "react";
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
}

const DialogItem:React.FC<PropsType> = (props) => {

    let path = 'dialogs/' + props.id;

    return (
        <div className={style.dialog}>
            <NavLink to={path} className={ divData => divData.isActive ? style.active : style.dialog }>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem;