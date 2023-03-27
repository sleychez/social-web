import React from "react";
import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, GetStringKeysType, Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router";
import style from '../common/FormsControl/FormsControl.module.css'
import {AppStateType} from "../../redux/redux-store";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import s from './Login.module.css'

type LoginFormOwnPropsType = {
    captchaUrl: string | null
}


const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input, [], "Логин для тестового аккаунта: free@samuraijs.com")}
            {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, {type: 'password'}, "Пароль для тестового аккаунта: free")}
            {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input, {})}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button className={s.button}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm)



type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormValuesTypeKeys = GetStringKeysType<LoginFormValuesType>


export const Login: React.FC = () => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)

   const dispatch = useAppDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }


    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }


    return <div style={{marginTop: '15px', marginLeft: '15px'}}>
        <h1>AURORA SOCIAL NETWORK LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
}
