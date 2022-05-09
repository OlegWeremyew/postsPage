import React from 'react';
import {MyButton} from "../../../common/MyButton/MyButton";
import {useNavigate} from "react-router-dom";

export const PostItem = ({removePost, post}) => {

    const navigate = useNavigate()

    return (
        <div className="post">
            <div className="post__container">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => {
                    navigate(`/posts/${post.id}`)
                }}>open</MyButton>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => removePost(post.id)}>delete</MyButton>
            </div>
        </div>
    );
};