import css from './ProfilePopup.module.css'
import { NavLink } from 'react-router-dom'
import { logOut } from '../../../redux/Auth/authSlice'
import { useDispatch } from 'react-redux'

export const ProfilePopup = () => {
    const dispatch = useDispatch()

    const onLogOut = () =>{
        dispatch(logOut())
    }
      
    return (
        <div dada-popup="menu"  className={css.popupBody}>
            <ul dada-popup="menu" className={css.menuList}>
                <NavLink to='/profile' className={css.listItem}>My Profile</NavLink>
                <NavLink to='/library'  className={css.listItem}>My Library</NavLink>
                <li onClick={onLogOut}  className={css.listItem}>Log out</li>
            </ul>
        </div>
    )
}
