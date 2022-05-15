import React from 'react';
import {MyButton} from "../../../common/MyButton/MyButton";
import {useNavigate} from "react-router-dom";

export const PostItem = ({removePost, number, post}) => {

    const navigate = useNavigate()

    return (
        <div className="post">
            <div className="post__container">
                <strong>{number}. {post.title}</strong>
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