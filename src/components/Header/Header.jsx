import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={style.header}>
            <img src='https://sun9-11.userapi.com/impg/tooHi40PbAoB8HQihVMApIFGsjR7e4cWfJ3Ybg/Ep1gsmaZ214.jpg?size=600x388&quality=96&sign=ed120c23ddbac4ec852bcec8fc84552c&type=album'/>

    <div className={style.loginBlock}>
        {props.isAuth
            ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
            : <NavLink to={'/login'}>Login</NavLink>}
    </div>
</header>
}

export default Header;