import React from 'react';
import {PostItem} from "./PostItem/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export const PostList = ({posts, title, removePost}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Posts not found!</h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) => {
                        return (
                            <CSSTransition key={post.id} timeout={500} classNames="post">
                                <PostItem
                                    number={index + 1}
                                    post={post}
                                    removePost={removePost}
                                />
                            </CSSTransition>

                        )
                    }
                )}
            </TransitionGroup>
        </div>
    );
};