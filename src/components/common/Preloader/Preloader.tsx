import React from "react";
import preloader from '../../../assets/images/preloader.gif'
import style from './Preloader.module.css'

const Preloader = () => {
    return <img className={style.preloader} src={preloader} />
}

export default Preloader;