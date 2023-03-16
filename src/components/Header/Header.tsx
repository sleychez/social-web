import React from 'react';
import style from './Header.module.css';
import {Avatar, Button, Layout, theme} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectCurrentLogin, selectIsAuth} from "../../redux/auth-selectors";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {logout} from "../../redux/auth-reducer";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

export type StatePropsType = {}


export const Header: React.FC<StatePropsType> = () => {

    const isAuth = useAppSelector(selectIsAuth)
    const login = useAppSelector(selectCurrentLogin)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const logoutCallback = async () => {
        await dispatch(logout())
        navigate('/login')
    }

    const {Header} = Layout;


    return <Header className={style.header}>
        {isAuth
            ? <>
                <span className={style.aurora}>Aurora</span>
                <Avatar alt={login || ''} style={{backgroundColor: '#423189', margin: '10px'}} shape="square"
                        icon={<UserOutlined/>}/>
                <span style={{fontWeight: 'bold'}}>{login}</span>
                <Button style={{marginLeft: '10px'}} onClick={logoutCallback}>Log out</Button>
            </>
            : <Button>
                <Link to={'/login'}>Login</Link>
            </Button>
        }
    </Header>
}