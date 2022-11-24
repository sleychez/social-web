import style from "../Dialogs/Dialogs.module.css";
import React from "react";

const Sidebar = (props) => {
    return (
        <div className={style.dialog}>{props.message}</div>
    )
}



export default Sidebar;