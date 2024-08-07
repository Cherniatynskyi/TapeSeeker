import css from './NavMenu.module.css'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfileThunk } from "../../redux/Auth/authThunk"
import { ProfileThumb } from './Profile/ProfileThumb'


export const NavMenu = () =>{
    const location = useLocation()
    const {pathname} = location
    const dispatch = useDispatch()
    const isAuth = useSelector(state=>state.auth.access_token)
    const {profile} = useSelector(state=>state.auth)

    useEffect(() => {
        if(isAuth){
          dispatch(getProfileThunk())
        }
      }, [dispatch, isAuth])

    return(
        <>
            <div className={css.navMenu}>
                <NavLink to='/' className={`${css.navLink} ${pathname === '/' && css.linkActive}`} >Home</NavLink>
                {pathname !== '/tv' ? <NavLink to={'/movies'} className={`${css.navLink} ${(pathname.includes('movies')|| pathname.includes('tv')) && css.linkActive}`}  >Movies & Tv</NavLink> :
                <div className={`${css.navLink} ${(pathname.includes('movies')|| pathname.includes('tv')) && css.linkActive}`}>Movies & Tv</div>}
                <NavLink className={css.navLink} >Support</NavLink>   
            </div>
            {profile 
            ?
            <ProfileThumb profile={profile}/>
            :
            <NavLink to='auth/login' className={css.signinBtn}>Sign in</NavLink>}
        </>
    )
} 