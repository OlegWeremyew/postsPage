import {About} from "../pages/About/About";
import {Posts} from "../pages/Posts/Posts";
import {Login} from "../components/Login/Login";
import {PostListPage} from "../components/PostListPage/PostListPage,jsx";
import {Navigate} from "react-router-dom";

export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostListPage, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]