import css from './NavMenu.module.css'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const NavMenu = () =>{
    const location = useLocation()
    const {pathname} = location

    return(
        <div className={css.navMenu}>
            <NavLink to='/' className={`${css.navLink} ${pathname === '/' && css.linkActive}`} >Home</NavLink>
            <NavLink to='/movies' className={`${css.navLink} ${pathname.includes('movies') && css.linkActive}`}  >Movies</NavLink>
            <NavLink to='/tv' className={`${css.navLink} ${pathname.includes('tv') && css.linkActive}`} >TV series</NavLink>
            <NavLink className={css.navLink} >Support</NavLink>
        </div>
    )
} 