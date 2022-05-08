import React, {useMemo, useState} from 'react'
import './styles/App.css'
import {PostList} from "./components/PostList/PostList";
import {PostForm} from "./components/PostForm/PostForm";
import {MySelect} from "./common/MySelect/MySelect";
import {MyInput} from "./common/MyInput/MyInput";
import {PostFilter} from "./components/PostFilter/PostFilter";
import {MyModalWindow} from "./common/MyModalWindow/MyModalWindow";
import {MyButton} from "./common/MyButton/MyButton";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "фф", body: "йй"},
        {id: 2, title: "йй", body: "цц"},
        {id: 3, title: "цц", body: "фф"},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (postID) => {
        setPosts(posts.filter(post => post.id !== postID))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: "15px"}} onClick={() => setModal(true)}>
                Create post
            </MyButton>
            <MyModalWindow visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost}/>
            </MyModalWindow>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList posts={sortedAndSearchedPosts} title={"Список постов 1"} removePost={removePost}/>
        </div>
    );
}

export default App;
