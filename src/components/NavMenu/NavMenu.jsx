import css from './NavMenu.module.css'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const NavMenu = () =>{
    const location = useLocation()
    const {pathname} = location

    return(
        <div className={css.navMenu}>
            <NavLink to='/' className={`${css.navLink} ${pathname === '/' && css.linkActive}`} >Home</NavLink>
            {pathname !== '/tv' ? <NavLink to={'/movies'} className={`${css.navLink} ${(pathname.includes('movies')|| pathname.includes('tv')) && css.linkActive}`}  >Movies & Tv</NavLink> :
             <div className={`${css.navLink} ${(pathname.includes('movies')|| pathname.includes('tv')) && css.linkActive}`}>Movies & Tv</div>}
            <NavLink className={css.navLink} >Support</NavLink>
        </div>
    )
} 