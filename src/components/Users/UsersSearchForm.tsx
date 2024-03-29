import {Field, Form, Formik} from "formik";
import {FilterType} from "../../redux/users-reducer";
import React from "react";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/users-selectors";
import style from './UsersSearchForm.module.css'


const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

type FriendFormType = 'true' | 'false' | 'null'

type FormType = {
    term: string
    friend: 'true' | 'false' | 'null'
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}



export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
const filter = useSelector(getUsersFilter)
    const submit = (values: FormType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean)=> void}) => {

        const filter: FilterType = {
    term: values.term,
    friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
}
        props.onFilterChanged(filter)
        setSubmitting(false)
    }

return <div>
    <Formik
        enableReinitialize
        initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
        validate={usersSearchFormValidate}
        onSubmit={submit}
        >
        {({ isSubmitting }) => (
            <Form style={{margin: '15px'}}>
                <Field style={{marginRight: '5px'}} type="text" name="term" />

                <Field name="friend" as='select'>
                    <option value='null'>All</option>
                    <option value='true'>Only followed</option>
                    <option value='false'>Only unfollowed</option>
</Field>
                <button className={style.button} type ='submit' disabled={isSubmitting}>
                    Find
                </button>
            </Form>
        )}
    </Formik>
</div>
})
