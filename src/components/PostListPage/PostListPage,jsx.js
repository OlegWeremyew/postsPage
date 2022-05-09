import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/postService";
import {Loader} from "../../common/Loader/Loader";

export const PostListPage = () => {

    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getByID(id)
        setPost(response.data)
    })

    const [fetchComments, isCommentsLoading, CommentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostID(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>You can see posts ID:{params.id}</h1>
            {
                isLoading
                    ? <Loader/>
                    : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {
                isCommentsLoading
                    ? <Loader/>
                    : <div>
                        {comments.map(comment => {
                            return (
                                <div key={comment.id} style={{marginTop: "15px"}}>
                                    <h5>{comment.email}</h5>
                                    <div>{comment.body}</div>
                                </div>
                            )
                        })}
                    </div>
            }

        </div>
    );
};
