import React, { useEffect, useState } from 'react';

function ThemeButton() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "system");
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const options = [
        {
            icon: "sunny",
            text: "light"
        }, {
            icon: "moon",
            text: "dark"
        }, {
            icon: "desktop-outline",
            text: "system"
        }
    ]

    function onWindowMatch() {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark");
        }
        else {
            element.classList.remove("dark");

        }
    }
    onWindowMatch()
    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', "dark")
                break;
            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('theme', "light")
                break;
            default:
                onWindowMatch()
                localStorage.removeItem('theme')
                break;
        }
        // eslint-disable-next-line
    }, [theme])

    darkQuery.addEventListener('change', (e) => {
        if (!("theme" in localStorage)) {
            if (e.matches) {
                element.classList.add('dark');
            }
            else {
                element.classList.remove('dark');
            }
        }
    })
    return (
        <div className='bg-cyan-900 px-1 rounded-md'>
            {
                options.map((option, index) => {
                    return (
                        <button key={index} onClick={() => setTheme(option.text)} className={`text-white w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === option.text && "!text-cyan-500"}`}>
                            <ion-icon name={option.icon}></ion-icon>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default ThemeButton