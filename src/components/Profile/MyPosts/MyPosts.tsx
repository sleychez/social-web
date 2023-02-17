import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import AddNewPostForm, {AddPostFormValuesType} from "./AddNewPostForm/AddNewPostForm";
import {PostType} from "../../../types/types";

export type StatePropsType = {
    posts: Array<PostType>

}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts:React.FC<StatePropsType &  DispatchPropsType> = props => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(post => <Post key={post.id} message={post.message} id={post.id} likesCount={post.likesCount}/>)

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={style.postsBlock}>
            <h1 className={style.postsDev}>IN DEVELOPMENT STAGE</h1>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}


const MyPostsMemorized = React.memo(MyPosts)


export default MyPosts;