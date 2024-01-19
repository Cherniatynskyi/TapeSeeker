import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from './App.module.css'
import logo from '../images/logo.png'
import { slide as Menu } from 'react-burger-menu'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export const Layout = () =>{
    return (
        <>
            <nav>
                <div className={css.logoContainer}>
                    <NavLink  to='/' className={css.navHomePage}>
                        <img className={css.logo} src={logo} alt="" />
                        <span className={css.logoText}>TapeSeeker</span>
                    </NavLink>
                    <Menu className={css.menu} right width={ '70%' }
                      burgerButtonClassName={css.button }
                      menuClassName={css.menuWrap}
                      overlayClassName={css.overlay}
                      customBurgerIcon={<RxHamburgerMenu color="white"/>} 
                      customCrossIcon={<IoMdClose /> }>
                        <li><NavLink className={css.navLink} to='/movies'>Movies</NavLink></li> 
                    </Menu>
                </div>
                <ul className={css.navList}>
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