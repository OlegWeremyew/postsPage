import React, {useContext} from 'react';
import {MyInput} from "../../common/MyInput/MyInput";
import {MyButton} from "../../common/MyButton/MyButton";
import {AuthContext} from "../../context";

export const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='Enter login'/>
                <MyInput type="password" placeholder='Enter password'/>
                <MyButton>Sign In</MyButton>
            </form>
        </div>
    );
};
