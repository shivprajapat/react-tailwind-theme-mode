import React, { useState } from 'react'
import ThemeButton from '../ThemeButton'
const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle)
    }
    return (
        <nav className="fixed top-0 w-full p-5 dark:bg-white bg-slate-900 shadow flex items-center justify-between">
            <div className="flex justify-between items-center ">
                <span className="text-4xl cursor-pointer dark:text-slate-900 text-cyan-500">
                    <ion-icon name="logo-react"></ion-icon>
                </span>
            </div>
            <ul className={`${toggle ? "top-[80px] opacity-100" : "opacity-0 top-[-400px]"} nav`}>
                <li className="nav-item">
                    <a href="/" className="nav-link">home</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">service</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">about</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">contact</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">blog</a>
                </li>
            </ul>
            <ThemeButton />
            <span className="text-3xl cursor-pointer mx-2 md:hidden block text-cyan-500" onClick={handleClick}>
                <ion-icon name="menu"></ion-icon>
            </span>
        </nav>
    )
}

export default Header