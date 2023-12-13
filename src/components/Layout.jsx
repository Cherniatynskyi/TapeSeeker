import { NavLink, Outlet } from "react-router-dom";
import css from './App.module.css'

export const Layout = () =>{
    return (
        <>
            <nav>
                <ul className={css.navList}>
                    <li className={css.navButton}><NavLink  to='/'>Home Page</NavLink></li>
                    <li className={css.navButton}><NavLink to='/movies'>Movies</NavLink></li> 
                </ul>    
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    )
}