import React from 'react';
import style from './Header.module.css';
import {Avatar, Button, Layout, theme} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectCurrentLogin, selectIsAuth} from "../../redux/auth-selectors";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {logout} from "../../redux/auth-reducer";
import {Link} from "react-router-dom";

export type StatePropsType = {}


export const Header:React.FC<StatePropsType> = () => {

const isAuth = useAppSelector(selectIsAuth)
    const login = useAppSelector(selectCurrentLogin)

    const dispatch = useAppDispatch()

    const logoutCallback = () => {
    dispatch(logout())
    }

    const {Header} = Layout;

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return  <Header className={style.header} style={{ padding: 0, background: colorBgContainer}}>
        {isAuth
            ? <>
                <span style={{marginRight: '570px',fontWeight: 'bold', color: 'white', fontSize: '25px' }}>Aurora</span>
                <Avatar alt={login || ''} style={{backgroundColor: '#423189', margin: '10px'}} shape="square" icon={<UserOutlined/>}/>
                <span style={{fontWeight: 'bold'}}>{login}</span>
                <Button style={{marginLeft: '10px'}}onClick={logoutCallback}>Log out</Button>
            </>
            : <Button>
                <Link to={'/login'}>Login</Link>
            </Button>
        }
    </Header>
}