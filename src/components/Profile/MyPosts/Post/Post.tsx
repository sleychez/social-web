import React from 'react';
import style from './Post.module.css';


type PropsType = {
    message: string
    likesCount: number
    id: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={style.item}>
            <img src='https://cdn-icons-png.flaticon.com/512/53/53104.png'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;