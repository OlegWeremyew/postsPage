import React from 'react';
import {MyButton} from "../../../common/MyButton/MyButton";

export const PostItem = ({removePost, number, post}) => {
    return (
        <div className="post">
            <div className="post__container">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => removePost(post.id)}>delete</MyButton>
            </div>
        </div>
    );
};