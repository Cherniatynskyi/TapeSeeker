import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from './App.module.css'

export const Layout = () =>{
    return (
        <>
            <nav>
                <ul className={css.navList}>
                    <li><NavLink className={css.navLink}  to='/'>Home Page</NavLink></li>
                    <li><NavLink className={css.navLink} to='/movies'>Movies</NavLink></li> 
                </ul>    
            </nav>
            <main>
                <Suspense fallback={<div>Loading.....</div>}>
                    <Outlet/>
                </Suspense>
            </main>
        </>
    )
}