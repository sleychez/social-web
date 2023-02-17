import React from "react";
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
}

const DialogItem: React.FC<PropsType> = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <NavLink to={path}
                 className={divData => divData.isActive ? style.active : style.dialog}>

            <img
                src='https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user.-perconal-symbol-vector-on-white-isolated-background-..jpg'/>
            <div className={style.dialogName}>
                {props.name}
            </div>
        </NavLink>
    )
}


export default DialogItem;