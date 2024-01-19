import { Suspense} from "react";
import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import css from './App.module.css'
import logo from '../images/logo.png'
import { slide as Menu } from 'react-burger-menu'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

class Layout extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
      }

      handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }
      closeMenu () {
        this.setState({menuOpen: false})
      }
      toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
      }
    

    render (){
        return(
            <>
            <nav className={css.nav}>
                <div className={css.logoContainer}>
                    <NavLink  to='/' className={css.navHomePage}>
                        <img className={css.logo} src={logo} alt="" />
                        <span className={css.logoText}>TapeSeeker</span>
                    </NavLink>
                    <Menu isOpen={this.state.menuOpen}
                      onStateChange={(state) => this.handleStateChange(state)} className={css.menu} right width={ '70%' }
                      burgerButtonClassName={css.button }
                      menuClassName={css.menuWrap}
                      overlayClassName={css.overlay}
                      customBurgerIcon={<RxHamburgerMenu color="white"/>} 
                      customCrossIcon={<IoMdClose /> }>
                        <li><NavLink onClick={() => this.toggleMenu()} className={css.navLink} to='/movies'>Movies</NavLink></li> 
                    </Menu>
                </div>
            </nav>
            <main className={css.main}>
                <Suspense fallback={<div>Loading.....</div>}>
                    <Outlet/>
                </Suspense>
            </main>
        </>
        )
        
    }
}

export default Layout