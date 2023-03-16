import React, {FC, lazy, useEffect, useState} from 'react';
import style from './App.module.css';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {useParams} from "react-router";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {useAppSelector} from "./hooks/useAppSelector";
import {UsersPage} from "./components/Users/UsersPage";
import {Login} from "./components/Login/Login";
import 'antd/dist/reset.css'
import type {MenuProps} from 'antd';
import {Layout, Menu} from "antd";
import { MessageOutlined, TeamOutlined, UserOutlined,} from '@ant-design/icons';
import {Header} from "./components/Header/Header";


const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));


const withRouter =<T,> (WrappedComponent: FC<T>) => (props: T) => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}

        />
    );
};

const {  Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('My profile', '1', <Link to='/profile'><UserOutlined /></Link>),
    getItem('Dialogs', '2', <Link to='/dialogs'><MessageOutlined /></Link>),
    getItem('Users', '3', <Link to='/users'><TeamOutlined /></Link> ),
]



const App: React.FC = () => {

    const [collapsed, setCollapsed] = useState(true);



    const initialized = useAppSelector((state) => state.app.initialized)
    const dispatch = useAppDispatch()
    const catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occurred')
    }


    useEffect(() => {
        dispatch(initializeApp())
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors)
        return () => {window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)}
    }, [])


    if (!initialized) {
        return <Preloader/>
    }


    return (
        <Layout className={style.layoutOne}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <img src='https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-a.jpg' className={style.img}  />
                    <Menu theme="dark" mode="inline" items={items}/>
            </Sider>
            <Layout className="site-layout">
                <Header/>
                <Content className={style.content}>
                    <Routes>
                                        <Route path="/"
                                               element={<Navigate to={'/profile'}/>}/>
                                        <Route path="/profile/:userId"
                                               element={<ProfileContainer/>}/>
                                        <Route path="/profile"
                                               element={<React.Suspense fallback={<Preloader/>}><ProfileContainer/></React.Suspense>}/>
                                        <Route path='/dialogs'
                                               element={<React.Suspense fallback={<Preloader/>}><DialogsContainer/></React.Suspense>}/>
                                        <Route path='/users/*'
                                            //@ts-ignore
                                               element={<UsersPage/>}/>
                                         <Route path='/login'
                                                element={<Login/>}/>
                                        <Route path='/social-web/'
                                            element={<Navigate to={'/login'}/>}/>
                                        <Route path="*"
                                               element={<div>404 NOT FOUND</div>}/>
                                    </Routes>
                    <Footer className={style.footer}>Aurora Social Network ©2022 Created by sleychez</Footer>
                </Content>
            </Layout>

        </Layout>

    );
}




export default withRouter(App);