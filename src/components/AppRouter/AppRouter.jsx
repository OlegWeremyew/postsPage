import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PageNotFound} from "../PageNotFound/PageNotFound";
import {Posts} from "../../pages/Posts/Posts";
import {About} from "../../pages/About/About";
import {PostListPage} from "../PostListPage/PostListPage,jsx";
import {AuthContext} from "../../context";

const AppRouter = () => {

        const {isAuth} = useContext(AuthContext)

        return (
            <Routes>
                <Route path='/' element={<Navigate to='/posts'/>}/>
                <Route path='*' element={<PageNotFound/>}/>
                <Route exact path='/posts' element={<Posts/>}/>
                <Route exact path='/posts/:id' element={<PostListPage/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        );
    }
;

export default AppRouter;