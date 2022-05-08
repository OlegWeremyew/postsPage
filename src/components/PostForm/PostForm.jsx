import React, {useState} from 'react';
import {MyInput} from "../../common/MyInput/MyInput";
import {MyButton} from "../../common/MyButton/MyButton";

export const PostForm = ({createPost}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        createPost(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                type="text"
                placeholder="Post name"
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="Post description"
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <MyButton onClick={addNewPost}>Add post</MyButton>
        </form>
    );
};
