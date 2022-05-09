import React, {useEffect, useState} from 'react'
import './styles/App.css'
import {PostList} from "./components/PostList/PostList";
import {PostForm} from "./components/PostForm/PostForm";
import {PostFilter} from "./components/PostFilter/PostFilter";
import {MyModalWindow} from "./common/MyModalWindow/MyModalWindow";
import {MyButton} from "./common/MyButton/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/postService";
import {Loader} from "./common/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const pagesArray = getPagesArray(totalPages)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (postID) => {
        setPosts(posts.filter(post => post.id !== postID))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
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
            {
                postError && <h1>Error {postError}</h1>
            }
            {
                isPostLoading
                    ? <div style={{display: "flex", justifyContent: 'center', marginTop: '50px'}}>
                        <Loader/>
                    </div>
                    : <PostList posts={sortedAndSearchedPosts} title={"posts list"} removePost={removePost}/>
            }
            <div className="page__wrapper">
                {pagesArray.map(p => {
                    return (
                        <span
                            onClick={() => changePage(p)}
                            className={page === p ? 'page page__current' : "page"}
                            key={p}
                        >
                            {p}
                        </span>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
