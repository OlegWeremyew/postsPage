import React, {useState} from 'react'
import './styles/App.css'
import {Navbar} from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import {AuthContext} from "./context";

export const App = () => {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <main className="App">
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
            }}>
                <Navbar/>
                <AppRouter/>
            </AuthContext.Provider>
        </main>
    );
}
