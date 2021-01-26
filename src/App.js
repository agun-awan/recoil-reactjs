import React from 'react';
import Router from './router'
import {useRecoilState} from "recoil";
import {theme} from "./store";

function App(props) {
    const [currentTheme] = useRecoilState(theme)
    const defaultTheme = currentTheme === 'light' ? 'bg-white text-dark' : 'bg-dark text-white'

    return (
        <div className={`${defaultTheme} vh-100`}>
            <Router />
        </div>
    );
}

export default App;