import React from 'react';
import style from './FormsControl.module.css'
import {Field} from "redux-form";

const FormsControl = ({input, meta: {touched, error},children }) => {
const hasError = touched && error
return (
    <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
        <div>
            {children}
        </div>
        { hasError && <span>{error}</span> }
    </div>
)
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsControl {...props}><textarea {...input} {...restProps} /></FormsControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsControl {...props}><input {...input} {...restProps} /></FormsControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name}
               component={component}
               validate={validators}
            {...props}
        /> {text}
    </div>
)

