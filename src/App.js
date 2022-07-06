import React, {useState} from 'react'
import './styles/App.css'
import {Navbar} from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import {AuthContext} from "./context";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

const option = {
    background: {
        color: {
            value: "#8fa4c7",
        },
    },
    fpsLimit: 520,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#1e0101",
        },
        links: {
            color: "#2d0202",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 1200,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {min: 1, max: 5},
        },
    },
    detectRetina: true,
}

export const App = () => {

    const [isAuth, setIsAuth] = useState(false)

    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <main className="App">
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
            }}>
                <Particles
                    className='particles'
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={option}
                />
                <Navbar/>
                <AppRouter/>
            </AuthContext.Provider>
        </main>
    );
}
