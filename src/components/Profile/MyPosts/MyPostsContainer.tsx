import React from 'react';
import {actions} from "../../../redux/profile-reducer";
import MyPosts, {DispatchPropsType, StatePropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}




const MyPostsContainer = connect<StatePropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPost
}) (MyPosts)

export default MyPostsContainer;